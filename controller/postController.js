const Post = require('../models/Post');


//Create a new Post
module.exports.create_post = async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = newPost.save(); 
        res.status(201).json({ success: true, newPost });
    }
    catch(err){
        console.log(err);
        res.status(400).json("Error, Post not Created");
    }
};

module.exports.get_all_post = async (req,res) => {
    
    try{
        const posts = await Post.find({userId : req.body._userId});
    }
    catch(err){
        console.log(err);
            const userPosts = await Post.find({userId : currentUser._id});res.status(400).
        json("Error, All Post Not Fetched")
    }
}