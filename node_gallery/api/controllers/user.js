"use  strict";
const User = require("../db/models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  login,
  register,
};

async function login(req, res, next) {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ messages: "Niepoprawne dane logowania" });
      return;
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (isValidPassword) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        "kod",
        { expiresIn: "1h" }
      );
      res.json({ messages: "Zalogowano", token });
      return;
    }

    res.status(400).json({ messages: "Niepoprawne dane logowania" });
  } catch (r) {
    res.status(400).json({ messages: "Nie udało się zalogowć" });
  }
}

async function register(req, res, next) {
  const { first_name, last_name, password, email } = req.body;

  try {
    const hased_password = bcrypt.hashSync(password, 10);

    const user = new User({
      first_name,
      last_name,
      password: hased_password,
      email,
    });

    await user.save();
    res.json({ messages: "Udało się zarejestrować" });
  } catch (r) {
    res.json({ messages: "Nie udało się zarejestrować" }).status(400);
  }
}
