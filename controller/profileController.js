const Profile = require("../models/Profile");
const User = require("../models/User");


 

const getProfileById = async (req, res) => {
  console.log(req.params.id);
  const userProfile =[]
    try {
    const id  = req.params.id;
    const profileInstance = await User.find({ _id : id });
    console.log(profileInstance);
    profileInstance.forEach(ele => {
      userProfile.push({email : ele.email,phone: ele.phone, userName : ele.email.split('@')[0] })
    });
    res.status(200).json(userProfile);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error in Showing Profile");
  }
};

module.exports = {
    getProfileById
};