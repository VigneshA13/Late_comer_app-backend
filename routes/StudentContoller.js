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

route.post("/detail", async (req, res) => {
  const { dno } = req.body;
  const detail = await service.StudentDetail(dno);
  const leave = await service.SelectStudent(dno);

  res.send({
    studentDetail: detail[0],
    leaveCount: leave.length,
  });
});

// route.post("/count", async (req, res) => {
//   const { numbers } = req.body;
//   let data = [];
//   const detail = await service.leaveCount();
//   for (let i in numbers) {
//     for (let j = 0; j < detail.length; j++) {
//       let { dno } = detail[j];

//       if (numbers[i] == dno) {
//         data.push({ studentDetail: detail[j] });
//       }
//     }
//   }

//   res.send(data);
// });

route.post("/count", async (req, res) => {
  const { numbers } = req.body;
  let data = [];

  for (let i = 0; i < numbers.length; i++) {
    const detail = await service.leaveCount(numbers[i]);
    data.push({ dno: numbers[i], leaveCount: detail });
  }

  res.send(data);
});

route.post("/datewise", async (req, res) => {
  const detail = await service.dateWiseList(req.body);
  res.send(detail);
});

route.get("/todayList", async (req, res) => {
  const date = new Date();

  // const detail = await service.todayList(req.body);
  res.send(date.getDate());
});
module.exports = route;
