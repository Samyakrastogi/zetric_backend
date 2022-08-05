const mongoose = require('mongoose');

const userListSchema = mongoose.Schema(
    {
        // get the _id of all the users from db except the logged in user
        followUserId : {type : String, required : true},  // _id
        followUserName : String,
        ProfileImageUrl : String
    }
);

module.exports = userListSchema;