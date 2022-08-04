const express = require('express');
const router = express.Router();

const postSchema = require('../models/Post');
const postController = require('../controller/postController');
const { AuthenticateJWT } = require('../middleware/postMiddleware');


 
router.post('/create-post', AuthenticateJWT, postController.create_post );
router.get('/get-all-post', postController.get_all_post);


module.exports = router;