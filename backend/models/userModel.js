const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (userName, email, password) {
  if (!userName || !password || !email) {
    throw Error("All fields must be filled.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid, please try again.");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password is not strong enough, please contain at least one uppercase letter, symbol and number "
    );
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use, please use try another email.");
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({ userName, email, password: hashedPassword });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid account, please try again.");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid account, please try again.");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
