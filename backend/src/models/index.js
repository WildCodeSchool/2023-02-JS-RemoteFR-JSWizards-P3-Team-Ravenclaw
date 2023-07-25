require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers
const models = {};

const VideoManager = require("./VideoManager");
const LanguageManager = require("./LanguageManager");
const GameManager = require("./GameManager");
const UserManager = require("./UserManager");
const PlanManager = require("./PlanManager");
const CategoryManager = require("./CategoryManager");
const UserVideoManager = require("./UserVideoManager");
const VideoCategoryManager = require("./VideoCategoryManager");

models.user_video = new UserVideoManager();
models.user_video.setDatabase(pool);

models.video = new VideoManager();
models.video.setDatabase(pool);

models.language = new LanguageManager();
models.language.setDatabase(pool);

models.game = new GameManager();
models.game.setDatabase(pool);

models.user = new UserManager();
models.user.setDatabase(pool);

models.plan = new PlanManager();
models.plan.setDatabase(pool);

models.category = new CategoryManager();
models.category.setDatabase(pool);

models.videoCategory = new VideoCategoryManager();
models.videoCategory.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
