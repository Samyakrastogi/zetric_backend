const User = require('../models/User');
module.exports.get_users= async(req, res) => {
    const users=[]
    try {
        const result=await User.find();
       // console.log("res", result)
        result.forEach(element => {
            users.push({username:element.email.split('@')[0],follower_id:element._id})
        });
       // console.log(users)
        res.status(200).json(users);
    } 
    catch (err) {
        console.log(err);
        res.status(400).json("Error in Showing users")
    }
};