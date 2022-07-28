const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    // name : { type : String},
    email : { type : String, required : true,  unique : true},
    // phone : { type : String},
    password : { type : String, required : true}
})

//fire a ftn before doc saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);  
    (next);
});

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email");
}


const User = mongoose.model('user', userSchema);

module.exports = User;