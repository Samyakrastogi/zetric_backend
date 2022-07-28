const jwt = require('jsonwebtoken')
require('dotenv').config();

 
const requireAuth = (req, res, next) => {
    const token =req.cookie.jwt

    //to check whether jwt token exists and is verified
    if(token){
        jwt.verify(token , process.env.SECRET_KEY , (err, decodedToken) => {
            if(err){
                // console.log(err.message);
                // res.redirect('/login'); 

                //throw 401 unauthorised access error
                res.status(401).json({message : 'Token Not Verified, Authorisation Denied'});
            }
            else{
                 console.log(decodedToken);
                 next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}

module.exports = {requireAuth};