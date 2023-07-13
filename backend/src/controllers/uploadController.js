const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");

uuidv4();

const GAME_THUMB_DEST = "./public/uploads/games/";

const post = (req, res) => {
  const { filename, originalname } = req.file;
  // fs.rename(oldPath, newPath, callback);
  // use uuid package to give a unique filename and avoid file to be replaced
  fs.rename(
    `${GAME_THUMB_DEST}${filename}`,
    `${GAME_THUMB_DEST}${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File successfully uploaded");
    }
  );
};

module.exports = { post };
