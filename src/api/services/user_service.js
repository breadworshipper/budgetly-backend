const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username: email,
    password: hashedPassword,
  });

  const savedUser = await user.save();

  return new Promise((resolve, reject) => {
    passport.authenticate("local", function (err) {
      if (err) {
        reject(err);
      }

      req.logIn(savedUser, function (err) {
        if (err) {
          reject(err);
        }
        resolve(savedUser.toJSON());
      });
    })(req, res);
  });
}

// TODO : refactor
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ username: email });

    if (!user) {
      return res.status(401).send("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      req.login(user, function (err) {
        if (err) {
          console.log(err);
          return res.status(500).send("Login failed");
        }
        console.log("Login success");
        res.json(user);
      });
    } else {
      return res.status(401).send("Invalid password");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Login failed");
  }
}

module.exports = { registerUser, loginUser };
