const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const FRONT_DEST = `http://localhost:${process.env.APP_PORT}/`;

const post = (req, res) => {
  // extract file destination (backend location)
  const { destination } = req.file;
  const fileDestination = destination.slice(destination.search("uploads"));

  // give file unique name by pre-pending uuid (avoid file to be overwritten)
  const { filename, originalname } = req.file;
  const oldfileName = filename;
  const newfileName = `${uuidv4()}-${originalname}`;

  // rename file
  // fs.rename(oldPath, newPath, callback);
  fs.rename(
    `./public/${fileDestination}${oldfileName}`,
    `./public/${fileDestination}${newfileName}`,
    (err) => {
      if (err) throw err;
      res.json({
        url_file: `${FRONT_DEST}${fileDestination}${newfileName}`,
      });
    }
  );
};

const remove = (req, res) => {
  const { thumbnail: thumbnailUrl } = req.body;

  const isUploadFolder = thumbnailUrl.includes(FRONT_DEST);

  // image is not in publick backend folder => do nothing
  if (!isUploadFolder) {
    res.status(200).json({
      message: "Private files (frontend/assets) cannot be deleted...",
    });
  } else {
    // retrieve thumbnail relative path in backend public folder
    const fileName = `./public/uploads${req.url}/${thumbnailUrl.replace(
      `${FRONT_DEST}uploads${req.url}/`,
      ""
    )}`;
    // delete image
    fs.unlink(fileName, (err) => {
      if (err) throw err;
    });
    res.status(204).json({
      message: "Thumbnail file successfully deleted!",
    });
  }
};

module.exports = { post, remove };
