const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  // user credentials have been verified by previous middleware (user is authenticated)_
  // create JWT info (token with expiration time)
  const payload = { sub: req.user.id_user };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  // delete user sensitive information from the request
  delete req.body.password;
  delete req.user.password;

  // send back authentication token to the client and save it as a cookie
  res.cookie("appjwt", token, { httpOnly: true }).status(200).send(req.user);
};

module.exports = { login };
