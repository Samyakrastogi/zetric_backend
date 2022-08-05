const mongoose = require("mongoose");

const followingAndFollowerSchema = new mongoose.Schema({
  userId: { //logged in user's id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  followUserId: { type: String, required: true }, //id of user to be followed
  userName: { type: String, required: true }, //username of id to be followed
  profileImageURL : String
        // Maybe add username as a link to redirect to the specific profile
});


module.exports = followingAndFollowerSchema;