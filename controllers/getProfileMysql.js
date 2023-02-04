import { mysqlConnection } from "../connection/index.js";
export const getProfileMysql = async (req, res, next) => {
  mysqlConnection((conn) => {
    conn.query("SELECT * FROM Profile", (err, row) => {
      if (err) return console.error("ERROR: " + err);
      console.log(row);
      res.send({ row });
    });
  });
};
