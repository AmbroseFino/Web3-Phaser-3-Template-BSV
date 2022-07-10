"use strict";

var express = require("express");

var router = express.Router();

var controller = require('../controllers/login.controller');

var auth = require("../middleware/auth.middleware"); // display login menu


router.get('/', controller.getLoginLink); // recieve authentication token from handcash

router.get('/authenticate', controller.getAuthenticate); // display user information

router.get('/auth/game', auth, controller.getProfile); // display user information

router.get('/auth/balance5', auth, controller.getBalance5); // // display user information
// router.get('/auth/dashboard', auth, controller.getDashboard)
// // display friends information
// router.get('/auth/friends', auth, controller.getFriends)

module.exports = router;
//# sourceMappingURL=login.router.js.map