const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    // delete user sensitive information from the request
    delete req.body.password;
    delete req.user.password;

    // user credentials have been verified by previous middleware (user is authenticated)_
    // create JWT info (token with expiration time)
    const payload = { sub: req.user.id_user };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    if (!token) throw new Error("No authentication token returned");

    // send back authentication token to the client and save it as a cookie
    res.cookie("appjwt", token, { httpOnly: true }).status(200).json(req.user);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when generating authentication token");
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("appjwt").status(200).json({ message: "user logged out" });
  } catch (err) {
    console.error(err);
    res.status(500).send("oops...an error occured when loggin out the user");
  }
};

module.exports = { login, logout };
