const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
app.use(express.urlencoded());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", require("./routes"));
app.use("/static", express.static("public"));
https
  .createServer(
    {
      key: fs.readFileSync("./cert/private.key"),
      cert: fs.readFileSync("./cert/certificate.crt"),
    },
    app
  )
  .listen(3000, function () {
    console.log("The HTTPS protocol is running without erros");
  });
