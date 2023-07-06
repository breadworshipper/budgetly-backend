const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/User");
const passport = require("passport");

const userService = require("../services/user_service");

var jsonParser = bodyParser.json();

// TODO: Refactor
router.post("/register", jsonParser, async function(req, res) {
  try {
    const user = await userService.registerUser(req, res);
    res.json(user);
  } 
  catch (err) {
    console.error(err);
    res.status(500).send("Registration failed");
  }
});
  
router.post("/login", jsonParser, function(req, res) {
    userService.loginUser(req, res);
  });

module.exports = router;
