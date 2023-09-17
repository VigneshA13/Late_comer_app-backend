const express = require("express");
const app = express();
const bp = require("body-parser");
const cors = require("cors");

const db = require("./db");
const login = require("./routes/LoginController");

app.use(bp());
app.use(cors());

app.use("/staff", login);

app.listen(9000, () => {
  console.log("Server running on port 9000...");
  db.query("SELECT 1")
    .then(() => console.log("connected to mysql database...."))
    .catch((err) => console.log(err));
});
