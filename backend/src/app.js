const fs = require("node:fs");
const path = require("node:path");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const mainRouter = require("./routers/mainRouter");

// create express app
const app = express();

// use some application-level middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// routing
app.use("/", mainRouter);

// serve the `backend/public` folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

module.exports = app;
