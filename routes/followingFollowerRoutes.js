const express = require('express');
const router = express.Router();

const { AuthenticateJWT } = require('../middleware/verificationMiddleware');
const followingFollowerController = require('../controller/followingFollowerController')
const followingFollowerSchema = require('../models/followingFollower');

router.put('/follow',AuthenticateJWT, followingFollowerController.followUser);

module.exports = router;
