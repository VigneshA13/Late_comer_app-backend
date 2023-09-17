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
    .query("SELECT * FROM late WHERE dno = '" + dno + "'")
    .catch((err) => console.log(err));

  return data;
};
