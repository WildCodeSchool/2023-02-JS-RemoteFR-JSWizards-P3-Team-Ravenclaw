const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const FRONT_DEST = `http://localhost:${process.env.APP_PORT}/`;
const GAME_THUMB_DEST = "/uploads/games/";

const post = (req, res) => {
  const { filename, originalname } = req.file;
  const oldfileName = filename;
  // use uuid package to give a unique filename and avoid file to be replaced
  const newfileName = `${uuidv4()}-${originalname}`;

  // fs.rename(oldPath, newPath, callback);
  fs.rename(
    `./public/${GAME_THUMB_DEST}${oldfileName}`,
    `./public/${GAME_THUMB_DEST}${newfileName}`,
    (err) => {
      if (err) throw err;
      res.json({
        url_thumbnail: `${FRONT_DEST}${GAME_THUMB_DEST}${newfileName}`,
      });
    }
  );
};

module.exports = { post };
