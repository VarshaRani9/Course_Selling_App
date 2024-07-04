const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  const value = await User.findOne({
    username,
    password,
  });
  if (value) {
    next();
  } else {
    res.status(403).json({
      msg: "User doesn't exist",
    });
  }
}

module.exports = userMiddleware;
