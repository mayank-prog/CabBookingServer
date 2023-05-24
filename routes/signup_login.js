const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');


// Route for sending OTP for sign up
router.post('/signup', authController.Signup);

// Route for sending OTP for login
router.post('/login', authController.Login);


// Route for verifying OTP...
router.post('/verifyOTP', authController.verifyOTP);

module.exports = router;