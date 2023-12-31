const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema(
    {
        email: String, 
        password: String
    }
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
