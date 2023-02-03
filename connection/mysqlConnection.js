import mysql from "mysql";
export const mysqlConnection = () => {
  var connection = mysql.createConnection({
    host: "127.0.0.2",
    user: "root",
    password: "",
    port: "3307",
  });

  connection.connect(function (err) {
    if (err) return console.error("error: " + err.message);
    console.log("MySQL Connected!");
    return connection;
  });
};
