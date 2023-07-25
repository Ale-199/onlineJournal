const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const { userName } = user;

    const token = generateToken(user._id);

    res.status(200).json({ email, token, userName });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signupUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.signup(userName, email, password);

    const token = generateToken(user._id);
    res.status(200).json({ userName, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signupUser, loginUser };
