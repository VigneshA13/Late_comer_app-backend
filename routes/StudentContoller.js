const express = require("express");
const route = express.Router();
const db = require("../db");

route.post("/login", async (req, res) => {
  const { name, password } = req.body;
  await db
    .query(
      "SELECT * FROM staff WHERE name = '" +
        name +
        "' AND password = '" +
        password +
        "'"
    )
    .then((data) => {
      res.send(data[0]);
      console.log(data[0]);
    })
    .catch((err) => console.log(err));
});

module.exports = route;
