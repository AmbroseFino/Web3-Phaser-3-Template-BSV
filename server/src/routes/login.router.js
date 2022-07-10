const express = require("express");
const router = express.Router();
const controller = require('../controllers/login.controller')
const auth = require("../middleware/auth.middleware");

// display login menu
router.get('/', controller.getLoginLink)

// recieve authentication token from handcash
router.get('/authenticate', controller.getAuthenticate)

// display user information
router.get('/auth/game', auth, controller.getProfile)

module.exports = router;
