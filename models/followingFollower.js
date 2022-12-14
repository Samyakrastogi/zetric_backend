const mongoose = require("mongoose");

const followingFollowerSchema = new mongoose.Schema({
  userId: {
    //logged in user's id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  followUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  }, //id of user to be followed
  userName: { type: String, required: true }, //username of id to be followed
  profileImageURL: String,
  // Maybe add username as a link to redirect to the specific profile
  followedTo : [],
  followedBy : []  
});

const followingFollower = mongoose.model("followingFollower", followingFollowerSchema);

module.exports = followingFollower;
