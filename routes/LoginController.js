const express = require("express");
const route = express.Router();

const service = require("../services/Staff");

route.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const row = await service.SelectStaff(name, password);
  if (row.length == 1) {
    const [data] = row;
    console.log("Staff ID : " + data.id);
    res.send({ staffId: data.id, staffName: data.name });
  } else {
    console.log("Invalid username or password.");
    res.send("Invalid username or password.");
  }
});

module.exports = route;
