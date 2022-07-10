const express = require("express");
const router = express.Router();
const controller = require('../controllers/features.controller')
const auth = require("../middleware/auth.middleware");

// send a test transaction on the user's behalf
router.post('/auth/test-send', auth, controller.sendTransaction);

// send a test transaction on the bots's behalf
router.post('/auth/test-sendBot', auth, controller.sendBot);

// send a multisend test transaction on the user's behalf
router.post('/auth/test-multi-send', auth, controller.sendMultisendTransaction);

// send a multisend test transaction on the user's behalf
router.post('/auth/test-data', auth, controller.sendDataTransaction);

// fetch a transaction
router.get('/auth/get-transaction', auth, controller.getTransaction);

// encrypt a post
router.post('/auth/encrypt', auth, controller.postEncrypt);



module.exports = router;
