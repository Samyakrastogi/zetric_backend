const express = require("express");
const router = express.Router();

const profileSchema = require("../models/Profile");
const profileController = require("../controller/profileController");
const { AuthenticateJWT } = require('../middleware/postMiddleware');

router.get("/profile/:id", AuthenticateJWT, profileController.getProfileById);

module.exports = router;
