const express = require('express');

const router = express.Router();

const userSchema = require('../models/User.js');

const authController = require('../controller/authController')

 

// router.get('/signup', authController.signup_get);

router.post('/signup', authController.signup_post );

// router.get('/login', authController.login_get);

router.post('/login', authController.login_post);

module.exports = router;
