import { mysqlConnection } from "../connection/index.js";
import { insertProfiles } from "../queries/insertProfiles.js";
import { createTable } from "../queries/createTable.js";
import { faker } from "../data/faker.js";

mysqlConnection((connection) => {
  connection.query(createTable),
    (err, rows) => {
      if (err) {
        return console.error("ERROR: " + err);
      }
      console.log("Created Database");
      console.log("rows" + JSON.stringify(rows));
    };
  faker.forEach((data) => {
    connection.query(
      insertProfiles,
      [data.id, data.name, data.profilePic],
      (err, rows) => {
        if (err) {
          return console.error("ERROR: " + err);
        }
        console.log("Created Database");
        console.log("rows" + JSON.stringify(rows));
      }
    );
  });
  connection.end();
});
