const Post = require("../models/Post");

//Create a new Post
module.exports.create_post = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json({ success: true, savedPost });
  } catch (err) {
    console.log(err);
    res.status(400).json("Error, Post not Created");
  }
};

// module.exports.get_all_post = async (req,res) => {
//     let postArray = [];
//     try{

//     }
//     catch(err){
//         console.log(err);
//             const userPosts = await Post.find({userId : currentUser._id});res.status(400).
//         json("Error, All Post Not Fetched")
//     }
// }
