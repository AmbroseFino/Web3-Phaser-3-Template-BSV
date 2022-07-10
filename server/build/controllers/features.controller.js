"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("../models/user.model"),
    User = _require.User;

var _require2 = require("../models/rob.model"),
    Rob = _require2.Rob;

var _require3 = require('bsv'),
    PrivateKey = _require3.PrivateKey,
    PublicKey = _require3.PublicKey;

var ECIES = require('bsv/ecies');

var _require4 = require('@handcash/handcash-connect'),
    HandCashConnect = _require4.HandCashConnect;

require('dotenv').config();

var fetch = require('node-fetch');

var handCashConnect = new HandCashConnect({
  appId: process.env.appId,
  appSecret: process.env.appSecret
});

var parseHandleArray = function parseHandleArray(handlesString) {
  return handlesString.replace(/ /g, "").replace(/\$/g, "").split(",");
};

var parseHandle = function parseHandle(handleString) {
  return handleString.replace(/ /g, "").replace(/\$/g, "");
};

function ConvertStringToHex(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i).toString(16).slice(-4);
  }

  return arr.join("");
}

function ConvertHexToString(str1) {
  var hex = str1.toString();
  var str = '';

  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return str;
} // sends a transaction on behalf of the user


module.exports.sendTransaction5 =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var user, account, handle, amount, note, currencyCode, paymentParameters, payment;
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
            // define parameters 
            handle = 'runonbsv';
            amount = 5;
            note = 'Play Game';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context.next = 13;
            return account.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 13:
            payment = _context.sent;
            res.send(payment);
            console.log(payment);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports.sendTransaction25 =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var user, account, handle, amount, note, currencyCode, paymentParameters, payment;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context2.sent;
            // define parameters 
            handle = 'runonbsv';
            amount = 25;
            note = 'Play Game';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context2.next = 13;
            return account.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 13:
            payment = _context2.sent;
            res.send(payment);
            console.log(payment);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports.sendTransaction50 =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res, next) {
    var user, account, handle, amount, note, currencyCode, paymentParameters, payment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context3.sent;
            // define parameters 
            handle = 'runonbsv';
            amount = 50;
            note = 'Play Game';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context3.next = 13;
            return account.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 13:
            payment = _context3.sent;
            res.send(payment);
            console.log(payment);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports.sendTransaction100 =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res, next) {
    var user, account, handle, amount, note, currencyCode, paymentParameters, payment;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context4.sent;
            // define parameters 
            handle = 'runonbsv';
            amount = 100;
            note = 'Play Game';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context4.next = 13;
            return account.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 13:
            payment = _context4.sent;
            res.send(payment);
            console.log(payment);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // sends a transaction on behalf of the ROB


module.exports.sendWinner5 =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(req, res, next) {
    var user, account, _ref6, publicProfile, rob, runonbsv, handle, amount, note, currencyCode, paymentParameters, payment;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context5.sent;
            _context5.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context5.sent;
            _context5.next = 8;
            return account.profile.getCurrentProfile();

          case 8:
            _ref6 = _context5.sent;
            publicProfile = _ref6.publicProfile;
            _context5.next = 12;
            return User.findById(process.env.auth);

          case 12:
            rob = _context5.sent;
            _context5.next = 15;
            return handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

          case 15:
            runonbsv = _context5.sent;
            // define parameters 
            handle = "".concat(publicProfile.handle);
            amount = 20;
            note = 'Run On BSV Winner!';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context5.next = 23;
            return runonbsv.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 23:
            payment = _context5.sent;
            console.log(payment);

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports.sendWinner25 =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res, next) {
    var user, account, _ref8, publicProfile, rob, runonbsv, handle, amount, note, currencyCode, paymentParameters, payment;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context6.sent;
            _context6.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context6.sent;
            _context6.next = 8;
            return account.profile.getCurrentProfile();

          case 8:
            _ref8 = _context6.sent;
            publicProfile = _ref8.publicProfile;
            _context6.next = 12;
            return User.findById(process.env.auth);

          case 12:
            rob = _context6.sent;
            _context6.next = 15;
            return handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

          case 15:
            runonbsv = _context6.sent;
            // define parameters 
            handle = "".concat(publicProfile.handle);
            amount = 100;
            note = 'Run On BSV Winner!';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context6.next = 23;
            return runonbsv.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 23:
            payment = _context6.sent;
            console.log(payment);

          case 25:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}();

module.exports.sendWinner50 =
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(req, res, next) {
    var user, account, _ref10, publicProfile, rob, runonbsv, handle, amount, note, currencyCode, paymentParameters, payment;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context7.sent;
            _context7.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context7.sent;
            _context7.next = 8;
            return account.profile.getCurrentProfile();

          case 8:
            _ref10 = _context7.sent;
            publicProfile = _ref10.publicProfile;
            _context7.next = 12;
            return User.findById(process.env.auth);

          case 12:
            rob = _context7.sent;
            _context7.next = 15;
            return handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

          case 15:
            runonbsv = _context7.sent;
            // define parameters 
            handle = "".concat(publicProfile.handle);
            amount = 200;
            note = 'Run On BSV Winner!';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context7.next = 23;
            return runonbsv.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 23:
            payment = _context7.sent;
            console.log(payment);

          case 25:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x19, _x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();

module.exports.sendWinner100 =
/*#__PURE__*/
function () {
  var _ref11 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(req, res, next) {
    var user, account, _ref12, publicProfile, rob, runonbsv, handle, amount, note, currencyCode, paymentParameters, payment;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return User.findById(req.user._id);

          case 2:
            user = _context8.sent;
            _context8.next = 5;
            return handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

          case 5:
            account = _context8.sent;
            _context8.next = 8;
            return account.profile.getCurrentProfile();

          case 8:
            _ref12 = _context8.sent;
            publicProfile = _ref12.publicProfile;
            _context8.next = 12;
            return User.findById(process.env.auth);

          case 12:
            rob = _context8.sent;
            _context8.next = 15;
            return handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

          case 15:
            runonbsv = _context8.sent;
            // define parameters 
            handle = "".concat(publicProfile.handle);
            amount = 400;
            note = 'Run On BSV Winner!';
            currencyCode = 'DUR'; // construct the payment

            paymentParameters = {
              description: note,
              payments: [{
                destination: handle,
                currencyCode: currencyCode,
                sendAmount: amount
              }]
            }; // make the payment

            _context8.next = 23;
            return runonbsv.wallet.pay(paymentParameters)["catch"](function (err) {
              console.log(err);
            });

          case 23:
            payment = _context8.sent;
            console.log(payment);

          case 25:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x22, _x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}(); // // sends a transaction on behalf of the user
// module.exports.sendMultisendTransaction = async (req, res, next) => {
//   console.log("here")
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   // define parameters 
//   const handles = parseHandleArray(req.body.handles)
//   const amount = parseInt(req.body.amount)
//   const note = req.body.note
//   const currencyCode = 'DUR'
//   const payments = handles.map(handle => {return {
//     destination: handle,
//     currencyCode: currencyCode,
//     sendAmount: amount
//   }})
//   console.log(payments)
//   // configure the payment
//   const paymentParameters = {
//     description: note,
//     appAction: "test-multi-send",
//     payments: payments
//   };
//   // make the payment
//   const payment = await account.wallet.pay(paymentParameters)
//   console.log(payment)
//   // display public profile with the recent transaction
//   res.redirect("/auth/get-transaction?txid=" + payment.transactionId)
// }
// // sends a transaction on behalf of the user
// module.exports.sendDataTransaction = async (req, res, next) => {
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   const { publicProfile } = await account.profile.getCurrentProfile()
//   // define parameters 
//   const handle = publicProfile.handle
//   const amount = 500
//   const note = 'Posting data to the chain'
//   const data = ConvertStringToHex(req.body.text)
//   console.log(data)
//   const currencyCode = 'SAT'
//   // construct the payment
//   const paymentParameters = {
//     description: note,
//     payments:
//       [
//         {
//           destination: handle,
//           currencyCode: currencyCode,
//           sendAmount: amount,
//         },
//       ],
//     //attachment: { format: 'base64', value: 'ABEiM0RVZneImQCqu8zd7v8=' },
//     attachment: { format: 'hex', value: data },
//   };
//   // make the payment
//   const payment = await account.wallet.pay(paymentParameters).catch(err => console.log(err))
//   // display public profile with the recent transaction
//   res.redirect("/auth/get-transaction?txid=" + payment.transactionId)
// }
// // sends a transaction on behalf of the user
// module.exports.getTransaction = async (req, res, next) => {
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   const paymentResult = await account.wallet.getPayment(req.query.txid)
//   paymentResult.attachments = paymentResult.attachments.map(attachment => {
//     if(attachment.format == 'hex') 
//       attachment.hexValue = ConvertHexToString(attachment.value)
//     return attachment
//   })
//   console.log(paymentResult)
//   // display public profile with the recent transaction
//   res.render('transaction', {
//     tx: paymentResult,
//     path: '/transaction'
//   })
// }
// // sends a transaction on behalf of the user
// module.exports.postEncrypt = async (req, res, next) => {
//   // fetch the authenticated user and their profile
//   const user = await User.findById(req.user._id);
//   const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
//   const { publicKey, privateKey } = await account.profile.getEncryptionKeypair();
//   console.log(publicKey);
//   const ecPrivateKey = PrivateKey.fromWIF(privateKey);
//   const ecPublicKey = PublicKey.fromString(publicKey);
//   const plainText = req.body.encryptText;
//   const encryptedBuffer = ECIES().publicKey(ecPublicKey).encrypt(plainText);
//   console.log(encryptedBuffer.toString('base64'));
//   const decryptedBuffer = ECIES().privateKey(ecPrivateKey).decrypt(encryptedBuffer);
//   console.log(decryptedBuffer.toString('utf8'));
//   console.assert(decryptedBuffer.toString('utf8') == plainText);
//   // display public profile with the recent transaction
//   res.render('encryption', {
//     encryptionDetails: {
//       ecPrivateKey: ecPrivateKey,
//       ecPublicKey: ecPublicKey,
//       plainText: plainText,
//       encryptedBuffer: encryptedBuffer.toString('hex'),
//       decryptedBuffer: decryptedBuffer
//     },
//     path: '/encryption'
//   })
// }
//# sourceMappingURL=features.controller.js.map