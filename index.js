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
// const auth = require('');

const mongoose = require("./db.js");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/auth", authRoutes);
app.use(express.json());

app.listen(3000, () => console.log("Server started at port: 3000"));
