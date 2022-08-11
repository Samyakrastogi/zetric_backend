const followingFollower = require("../models/followingFollower");

const followUser = (req, res) => {
  followingFollower.findByIdAndUpdate(
    req.body.followUserId,
    { $push: { followedTo: req.userId } },
    { new: true }
  );
  try {
    res.status(201).json("User Followed");
  } catch (err) {
    console.log(err);
    res.status(400).json("Error, User Not Followed");
  }

  followingFollower.findByIdAndUpdate(
    req.body.userId,
    { $push: { followedBy: req.followUserId } },
    { new: true }
  );
  try {
    res.status(201).json("User Followed, followed by Increased");
  } catch (err) {
    console.log(err);
    res.status(400).json("Error, User Not Followed");
  }
};

module.exports = {
  followUser
};
