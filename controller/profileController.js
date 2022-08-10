const User = require("../models/User");

const getProfileById = async (req, res) => {
  console.log("id",req.params.id);
  const userProfile =[]
    try {
    const id  = req.params.id;
    const profileInstance = await User.find({ _id : id });
    //console.log("profile",profileInstance);
    profileInstance.forEach(ele => {
      userProfile.push({email : ele.email,phone: ele.phone, userName : ele.email.split('@')[0] })
    });
    res.status(200).json(userProfile);
  } catch (err) {
    console.log("error",err);
    res.status(400).json("Error in Showing Profile");
  }
};

module.exports = {
    getProfileById
};