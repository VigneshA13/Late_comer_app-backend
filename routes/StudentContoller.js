const express = require("express");
const route = express.Router();
const service = require("../services/Student");

route.post("/add", async (req, res) => {
  const { dno, staff } = req.body;
  const data = await service.AddStudent(dno, staff);
  console.log(data);
  if (dno.length == data) {
    res.send("success");
    console.log(data);
  } else {
    res.send("unable to insert");
    console.log("unable to insert");
  }
});

route.post("/select", async (req, res) => {
  const { dno } = req.body;
  const row = await service.SelectStudent(dno);
  res.send({ data: row, count: row.length });
});

module.exports = route;
