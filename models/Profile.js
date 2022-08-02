const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;
