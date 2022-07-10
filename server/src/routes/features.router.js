const express = require("express");
const router = express.Router();
const controller = require('../controllers/features.controller')
const auth = require("../middleware/auth.middleware");

// send a test transaction on the user's behalf
router.post('/auth/5-send', auth, controller.sendTransaction5);

// send a test transaction on the user's behalf
router.post('/auth/25-send', auth, controller.sendTransaction25);

// send a test transaction on the user's behalf
router.post('/auth/50-send', auth, controller.sendTransaction50);

// send a test transaction on the user's behalf
router.post('/auth/100-send', auth, controller.sendTransaction100);

// send a test transaction on the ROB's behalf
router.post('/auth/win-5', auth, controller.sendWinner5);

// send a test transaction on the ROB's behalf
router.post('/auth/win-25', auth, controller.sendWinner25);

// send a test transaction on the ROB's behalf
router.post('/auth/win-50', auth, controller.sendWinner50);

// send a test transaction on the ROB's behalf
router.post('/auth/win-100', auth, controller.sendWinner100);


module.exports = router;
