const authService = require("../services/auth.service");

const signUp = async (req, res, next) => {
  try {
    const token = await authService.signUp(req.body.email, req.body.password);

    return res.json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {

    const token = await authService.login(req.body.email, req.body.password);

    return res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  login,
};
