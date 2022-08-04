const jwt = require('jsonwebtoken')
require('dotenv').config();

const AuthenticateJWT = (req, res, next) => {
    console.log("Hii")
    // console.log(req)
    // console.log(res)
    const authtoken =req.headers.bearertoken
    console.log(authtoken)
    //to verify whether jwt token is same
    if(authtoken){
        jwt.verify(authtoken , process.env.SECRET_KEY , (err, decodedToken) => {
            if(err){
                //throw 401 unauthorised access error
                res.status(401).json({success : false, message : 'Authorisation Denied'});
            }
            else{
                 console.log(decodedToken);
                 next();
            }
        })
    }
    else{
        res.redirect('/create-post');
    }
}

module.exports = {AuthenticateJWT};