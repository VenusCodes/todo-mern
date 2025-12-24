const jwt = require("jsonwebtoken");
const { ENV_JWT_SECRET } = require("../constants/environment");

const signToken = (userId) => {
  return jwt.sign({ userId }, ENV_JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = {
  signToken,
};
