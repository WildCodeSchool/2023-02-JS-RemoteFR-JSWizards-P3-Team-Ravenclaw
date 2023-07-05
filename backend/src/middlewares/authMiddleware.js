const argon2 = require("argon2");
const models = require("../models");

/**
 * @desc middleware for checking user already exists in the database, and if so, pass along user credentials to the next middleware
 * hash user password using argon2 prior writing to database
 */
const verifyEmail = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [[user]] = await models.user.findByEmail(req.body.email);

    if (!user)
      return res
        .status(401)
        .send(
          "Not account found! Please verify your email address or make sure to sign up..."
        );
    req.user = user;
    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when retrieving user's email from database"
      );
  }
};

/**
 * @desc middleware to verify user password at authentication (POST login route)
 * check user redentials are valid, and if so proceed to the next handler
 */
const verifyPassword = async (req, res, next) => {
  try {
    const isUserVerified = await argon2.verify(
      req.user.password,
      req.body.password
    );

    // authentication failded (password did not match)
    if (!isUserVerified)
      return res
        .status(401)
        .send("Your email and password do not match. Please try again.");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured during user's password verification...");
  }
};

/**
 * @desc checking if account (email already) exists prior adding it to the database
 */
const checkForExistingAccount = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [[user]] = await models.user.findByEmail(req.body.email);
    if (user) {
      return res
        .status(200)
        .send("An account with the same email already exists");
    }
    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing account..."
      );
  }
};

/**
 * @desc hash user password using argon2 (prior writing to database)
 */
const hashPassword = async (req, res, next) => {
  /**
   * OWSP minimum recommendations for argon2id:
   *    - memoryCost (memory size m): 19 MiB (2^14.28)
   *    - timeCost (iteration count t): 2
   *    - parallelism (degree of parallelism p): 1
   */
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 14.28,
    timeCost: 2,
    parallelism: 1,
  };

  const { password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    // swap clear password with hashed password
    delete req.body.password;
    req.body.password = hashedPassword;
    next();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops... an error occured when hashing user's password");
  }
};

module.exports = {
  verifyEmail,
  verifyPassword,
  checkForExistingAccount,
  hashPassword,
};
