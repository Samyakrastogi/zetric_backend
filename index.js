const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
const pm2 = require("pm2");
const Bcrypt = require("Bcrypt");
const Joi = require("Joi");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes')

const mongoose = require("./db.js");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/v1', postRoutes);
app.use('/v2', profileRoutes);

app.listen(3000, () => console.log("Server started at port: 3000"));
