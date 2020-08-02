// const { say } = require("../pkg/ssvm_nodejs_starter_lib.js");
const express = require("express");
const fileUpload = require("express-fileupload");

const hostname = "0.0.0.0";
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.post("/handler", (req, res) => {
  res.setHeader('Content-type', 'image/jpeg')
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded");
  }
  let origin_img = req.files.image_file;
  // console.log(origin_img.data.toString('base64'))
  // res.send(origin_img.data)
  res.end(origin_img.data.toString('base64'))
});
app.listen(port, hostname, () => {
  console.log(`Listening at http://${hostname}:${port}`);
});
