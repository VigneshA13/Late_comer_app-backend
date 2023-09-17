const db = require("../db");

module.exports.SelectStaff = async (name, password) => {
  const [data] = await db
    .query(
      "SELECT * FROM staff WHERE name = '" +
        name +
        "' AND password = '" +
        password +
        "'"
    )
    .catch((err) => console.log(err));

  return data;
};
