const express = require('express');
const router = express.Router();

const profileSchema = require('../models/Profile');
const profileController = require('../controller/profileController');
const { AuthenticateJWT } = require('../middleware/postMiddleware');

router.get('/profile', profileController.get_profile);

router.get('/profile/:id', profileController.get_profileById);

module.exports = router;