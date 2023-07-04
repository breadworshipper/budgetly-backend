const User = require("../models/User");
const passport = require("passport");

function registerUser(email, password) {
    return new Promise((resolve, reject) => {
      User.register({ username: email }, password, function (err, user) {
        if (err) {
          console.log(err);
          reject(err);
        } 
        resolve(user);
      });
    });
}
  
module.exports = {registerUser};
