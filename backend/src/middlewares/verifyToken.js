const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    console.info(req.cookies.appjwt);
    const token = req.cookies.appjwt;
    if (!token)
      return res.status(401).json({ message: "no authentication token" });
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "l'authentification du token a échoué...",
      error: err.message,
    });
  }
};

module.exports = verifyToken;
