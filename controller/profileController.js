const Profile = require('../models/Profile');
// const User = require('../models/User');


module.exports.get_profile = (req, res) => {
    try {
        Profile.find().then( result => {
            res.status(200).json(result)
        })    
    } 
    catch (err) {
        console.log(err);
        res.status(400).json("Error in Showing Profile")
    }
};

module.exports.get_profileById = async (req, res) => {
    console.log(req.params.Id);
    try {
        Profile.findOne(req.params.Id).then( Profile => {
            res.status(200).json(Profile)
        })    
    } 
    catch (err) {
        console.log(err);
        res.status(400).json("Error in Showing Profile")
    }
};