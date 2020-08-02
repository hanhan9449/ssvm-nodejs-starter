// const { say } = require("../pkg/ssvm_nodejs_starter_lib.js");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { say, handler_photo } = require("../pkg/ssvm_nodejs_starter_lib");

const hostname = "0.0.0.0";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.redirect("/index.html");
});
app.get("/say", (req, res) => {
  res.header("Content-type", "application/json");
  res.end({ say: say() });
});

app.post("/handler", (req, res) => {
  res.header("Content-type", "text/plain");
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded");
  }
  let origin_img = req.files.image_file;
  // console.log(origin_img.data.toString('base64'))
  // res.send(origin_img.data)
  res.end(origin_img.data.toString("base64"));
});
app.post("/handler2", (req, res) => {
  res.header("Content-type", "application/json");
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded");
  }
  let origin_img = req.files.image_file;
  res.json({
    base64: origin_img.data.toString("base64"),
    size: handler_photo(origin_img.data),
  });
});
app.listen(port, hostname, () => {
  console.log(`Listening at http://${hostname}:${port}`);
});
