const express = require('express');
const router = express.Router();
console.log("post clicked")

const postSchema = require('../models/Post');
const postController = require('../controller/postController');
const { AuthenticateJWT } = require('../middleware/postMiddleware');


 
router.post('/create-post', AuthenticateJWT, postController.create_post );
router.post('/get-all-post',AuthenticateJWT, postController.get_all_post);
router.post('/delete/:id',AuthenticateJWT, postController.delete_post)
router.put('/update/:id',AuthenticateJWT, postController.update_post)


module.exports = router;