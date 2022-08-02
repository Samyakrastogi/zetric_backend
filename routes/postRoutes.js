const express = require('express');
const router = express.Router();

const postSchema = require('../models/Post');
const postController = require('../controller/postController');

 
router.post('/create-post', postController.create_post );
// router.get('/get-all-post', postController.get_all_post);


module.exports = router;