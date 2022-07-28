const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    post : {type : String, required : true, },
    image : {type : Image},
    date : {type : Date, required : true},
    UserId : {type : String, required : true, unique : true},
    Time : {type : TimeRanges, required : true}, 
    Reactions : {type : Number, count : true},
    Share : {type : Number, count: true}
});

const Posts = mongoose.model('post', postSchema);

module.exports = Posts;