const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.appjwt;
    if (!token)
      return res.status(401).json({ message: "No authentication token" });
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Token authentication failed...",
      error: err.message,
    });
  }
};

module.exports = verifyToken;
