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
    let postArray = [];
   // console.log("get-all-post",req.body)

    try{
        const posts=await Post.find({_userId:req.body._userId});
        console.log("posts", posts)
        res.status(201).json({ success: true, posts })

    }
    catch(err){
        console.log(err);
        res.status(400).json("Error, All Post Not Fetched")
    }
}

module.exports.delete_post=async(req, res)=>{
    console.log("delete",req.params)
    const id=req.params.id
    try{
        const delete_Post= await Post.findByIdAndDelete(id )
        console.log(delete_Post)
        res.status(201).json({ success: true, delete_Post, message:"post deleted" })
    }
    catch{
        res.status(400).json("Error, Post Not deleted")

    }
}