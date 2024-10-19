const express = require("express");
const app = express();
const path = require("node:path");

const router = require("./routes/router");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on PORT: " + PORT));
