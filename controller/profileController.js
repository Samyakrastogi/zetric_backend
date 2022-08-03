const Profile = require('../models/Profile');


module.exports.get_profile = (req, res) => {
    try {
        Profile.find().then( result => {
            res.status(200).json(Profile)
        })    
    } 
    catch (err) {
        console.log(err);
        res.status(400).json("Error in Showing Profile")
    }
};

module.exports.get_profileById = async (req, res) => {
    console.log(req.params._userId);
    try {
        Profile.findById().then( result => {
            res.status(200).json(Profile)
        })    
    } 
    catch (err) {
        console.log(err);
        res.status(400).json("Error in Showing Profile")
    }
};