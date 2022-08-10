const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    _userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,

    },
    post: { type: String, required: true },
    imageUrl: String,
    hashtag: String,
    postType: {
      type: String,
      enum: ["public", "anonymous"],
      default: "public",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('post', postSchema);


module.exports = Post;
