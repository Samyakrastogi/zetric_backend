const Profile = require("../models/Profile");
// const User = require('../models/User');

// module.exports.get_profile = (req, res) => {
//     try {
//         Profile.find().then( result => {
//             res.status(200).json(result)
//         })
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).json("Error in Showing Profile")
//     }
// };

const getProfileById = async (req, res) => {
  console.log(req.params.id);
  try {
    const { id } = req.params;
    const profileInstance = await Profile.findOne({ _id: id });
    res.status(200).json(profileInstance);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error in Showing Profile");
  }
};

module.exports = {
    getProfileById
};