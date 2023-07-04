const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("../models/User");
const passport = require("passport");

const userService = require("../services/user_service");

var jsonParser = bodyParser.json();

// TODO
router.post("/register", jsonParser, function(req, res, next){
    userService.registerUser(req.body.email, req.body.password)
    .then((registeredUser) => {
        console.log(`user: ${registeredUser}`);
        passport.authenticate("local", function(err) {
            if (err) {
                return next(err);
            }
            // Manually log in the user
            req.logIn(registeredUser, function(err) {
                if (err) {
                    return next(err);
                }
                console.log("Register success");
                // Return the JSON representation of the registered user
                res.json(registeredUser);
            });
        })(req, res, next);
    })
    .catch((err) => {
        res.status(500).send("Registration failed");
    });
});

// TODO
router.post("/login", jsonParser, function(req, res){

});

module.exports = router;
