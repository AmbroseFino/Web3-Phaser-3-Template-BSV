"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("../models/user.model"),
    User = _require.User;

var _require2 = require('@handcash/handcash-connect'),
    HandCashConnect = _require2.HandCashConnect;

require('dotenv').config();

var handCashConnect = new HandCashConnect({
  appId: process.env.appId,
  appSecret: process.env.appSecret
});

module.exports.getBalance5 =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var user, account, balance;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context.sent;
            _context.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context.sent;
            _context.next = 8;
            return account.wallet.getSpendableBalance();

          case 8:
            balance = _context.sent;
            console.log(balance.spendableSatoshiBalance); //send balance

            res.send("".concat(balance.spendableSatoshiBalance));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // login page


module.exports.getLoginLink =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var redirectUrl;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return handCashConnect.getRedirectionUrl();

          case 2:
            redirectUrl = _context2.sent;
            // return page with a login button
            res.render('index', {
              redirectUrl: redirectUrl,
              docTitle: 'Login',
              path: '/'
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}(); // authenticate


module.exports.getAuthenticate =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res, next) {
    var authToken, account, _ref4, publicProfile, handcashId, user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // create a user upon a new login
            authToken = req.query.authToken; // get user profile, and save alias to the user 

            _context3.next = 3;
            return handCashConnect.getAccountFromAuthToken(authToken);

          case 3:
            account = _context3.sent;
            _context3.next = 6;
            return account.profile.getCurrentProfile();

          case 6:
            _ref4 = _context3.sent;
            publicProfile = _ref4.publicProfile;
            handcashId = publicProfile.id; // check if the user exists, if not create a new one

            _context3.next = 11;
            return User.findOne({
              handcashId: handcashId
            });

          case 11:
            user = _context3.sent;

            if (!user) {
              user = new User();
              user.handcashId = handcashId;
            } // update authToken


            user.connectAuthToken = authToken; // save user

            _context3.next = 16;
            return user.save();

          case 16:
            // generating a jwt
            req.session.accessToken = user.generateAuthToken();
            res.redirect('/auth/game');

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}(); // returns user's information


module.exports.getProfile =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var authToken, account, _ref6, publicProfile, handcashId, user;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // create a user upon a new login
            authToken = req.query.authToken; // get user profile, and save alias to the user 

            _context4.next = 3;
            return handCashConnect.getAccountFromAuthToken(authToken);

          case 3:
            account = _context4.sent;
            _context4.next = 6;
            return account.profile.getCurrentProfile();

          case 6:
            _ref6 = _context4.sent;
            publicProfile = _ref6.publicProfile;
            handcashId = publicProfile.id; // check if the user exists, if not create a new one

            _context4.next = 11;
            return User.findOne({
              handcashId: handcashId
            });

          case 11:
            user = _context4.sent;

            if (!user) {
              user = new User();
              user.handcashId = handcashId;
            } // update authToken


            user.connectAuthToken = authToken; // save user

            _context4.next = 16;
            return user.save();

          case 16:
            // generating a jwt
            req.session.accessToken = user.generateAuthToken();

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // // returns user's information
// module.exports.getDashboard = async (req, res) => {
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   const { publicProfile } = await account.profile.getCurrentProfile();
//   const spendableBalance = await account.wallet.getSpendableBalance()
//   const permissions = await account.profile.getPermissions()
//   // print it out
//   // display public profile
//   res.render('dashboard', {
//     publicProfile: publicProfile,
//     spendableBalance: spendableBalance,
//     permissions: permissions,
//     path: '/dashboard'
//   }) 
// }
// // returns user's information
// module.exports.getFriends = async (req, res) => {
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   const friends = await account.profile.getFriends()
//   // print it out
//   console.log(friends)
//   // display public profile
//   res.render('friends', {
//     friends: friends,
//     path: '/friends'
//   }) 
// }
//# sourceMappingURL=login.controller.js.map