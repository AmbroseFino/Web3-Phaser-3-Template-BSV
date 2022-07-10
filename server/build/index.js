"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var featuresRoutes = require("./routes/features.router.js");

var loginRoutes = require("./routes/login.router.js");

var cors = require('cors');

var mongoose = require("mongoose");

require('dotenv').config();

var http = require('http');

var express = require("express");

var app = express();

var bodyParser = require('body-parser');

var path = require('path');

var passport = require('passport');

var expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}); // const rootDir = require('./util/path');


(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var port, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.use(passport.initialize());
          app.use(passport.session());
          app.use(cors());
          app.use(bodyParser.urlencoded({
            extended: true
          }));
          app.use(express["static"](path.join(__dirname, '/../public')));
          app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '/../index.html'));
          });
          app.get('/auth/game', function (req, res) {
            res.sendFile(path.join(__dirname, '/../public/game.html'));
          });
          app.use(bodyParser.json());
          app.use(expressSession);
          app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
          }); //connect to mongodb

          mongoose.connect(process.env.database, {
            useNewUrlParser: true
          }).then(function () {
            return console.log("Connected to MongoDB...");
          })["catch"](function (err) {
            return console.error("Could not connect to MongoDB...");
          });
          app.use(express.json()); //use users route for api/users

          app.use("/", featuresRoutes);
          app.use("/", loginRoutes);
          port = process.env.PORT || 3000;
          _context.next = 17;
          return http.createServer(app).listen(port);

        case 17:
          server = _context.sent;
          server.timeout = 300000;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
//# sourceMappingURL=index.js.map