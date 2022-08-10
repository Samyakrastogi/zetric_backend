const express = require('express');
const router = express.Router();
const userListController = require('../controller/userListController');
const { AuthenticateJWT } = require('../middleware/postMiddleware');

router.get('/all-users', AuthenticateJWT, userListController.get_users);
module.exports = router;