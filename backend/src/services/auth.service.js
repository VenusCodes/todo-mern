const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");

const signUp = async (email, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    email,
    password: passwordHash,
  });

  console.log("User created")
  const token = jwt.signToken(user._id);

  return token;
};

const login = async (email, password) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const match = bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid Credentials");
  }

  const token = jwt.signToken(user._id);

  return token;
};

module.exports = {
  signUp,
  login,
};
