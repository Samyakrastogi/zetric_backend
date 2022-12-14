const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;
