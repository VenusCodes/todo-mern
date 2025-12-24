const logger = (req, res, next) => {
  console.log(
    " REQ :: ",
    req.method,
    " :: ",
    req.path,
    " :: ",
    new Date().toISOString()
  );

  next();
};

module.exports = { logger };
