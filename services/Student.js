const db = require("../db");

module.exports.AddStudent = async (dno, staff) => {
  let count = 0;
  await dno.forEach((element) => {
    const insert = db
      .query(
        "INSERT INTO late (dno, staff) VALUES ('" +
          element +
          "', '" +
          staff +
          "')"
      )
      .catch((err) => {
        console.log(err);
      });
    insert.then((value) => {
      count = count + value[0].affectedRows;
      console.log(count);
    });
    count++;
  });
  return count;
};

module.exports.SelectStudent = async (dno) => {
  const [data] = await db
    .query("SELECT * FROM late WHERE dno = '" + dno + "' ORDER BY date")
    .catch((err) => console.log(err));

  return data;
};

module.exports.StudentDetail = async (dno) => {
  const [data] = await db
    .query("SELECT * FROM student WHERE dno = '" + dno + "'")
    .catch((err) => console.log(err));

  return data;
};

module.exports.leaveCount = async (dno) => {
  const [data] = await db
    .query("SELECT COUNT(*) AS leaveCount FROM late WHERE dno = '" + dno + "'")
    .catch((err) => console.log(err));
  const { leaveCount } = data[0];

  return leaveCount;
};

module.exports.dateWiseList = async (dates) => {
  const { startDate, endDate } = dates;
  const [data] = await db
    .query(
      "SELECT * from late where date >= '" +
        startDate +
        "' and Date <= '" +
        endDate +
        "' "
    )
    .catch((err) => console.log(err));

  return data;
};

module.exports.todayList = async (dates) => {
  const { date } = dates;
  const [data] = await db
    .query("SELECT * from late where date = '" + date + "' ")
    .catch((err) => console.log(err));

  return data;
};
