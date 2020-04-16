const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use("/", require("./routes"));
app.use("/static", express.static("public"));

app.listen(3000, "0.0.0.0");
