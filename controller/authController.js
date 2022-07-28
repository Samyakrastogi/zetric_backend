const User = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};

// module.exports.signup_get = (req, res) => {
//   res.json("signup");    
// };

// module.exports.login_get = (req, res) => {
//   res.json("login");
// };

module.exports.signup_post = async (req, res) => {
    console.log("body",req.body)
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, jwt: id});
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).json({});
  }
  // console.log(email, password);
  // res.send('user login');
};
