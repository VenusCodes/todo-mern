const jwt = require("jsonwebtoken");
const { ENV_JWT_SECRET } = require("../constants/environment");

const authenticate = (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];

  const payload = jwt.verify(token, ENV_JWT_SECRET);
  if (!payload) {
    return res.sendStatus(401);
  }

  req.userId = payload.userId;

  next();
};

module.exports = {
  authenticate,
};
