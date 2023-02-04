import mysql from "mysql";
import { myDB } from "../config/mysqlCredential.js";

export const mysqlConnection = (callback) => {
  let connection = mysql.createConnection(myDB);

  connection.connect((err) => {
    if (err) return console.error("error: " + err.message);
    console.log("MySQL Connected!");
    callback(connection);
  });
};
