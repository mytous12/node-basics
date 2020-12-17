const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.signUp = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).send("Invalid email or password");
    } else {
      const authorized = await bcrypt.compare(req.body.password, user.password);
      if (authorized) {
        req.session.isLoggedIn = true;
        res.send("User logged in successfully");
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
