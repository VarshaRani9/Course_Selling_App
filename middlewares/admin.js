const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  // Admin auth logic
  // Check inputs from header and validate from admin db
  const username = req.headers.username;
  const password = req.headers.password;

  const value = await Admin.findOne({
    username,
    password,
  });
  if (value) {
    next();
  } else {
    res.status(403).json({
      msg: "Admin doesn't exist",
    });
  }
}
module.exports = adminMiddleware;
