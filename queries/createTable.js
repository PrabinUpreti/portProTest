export const createTable =
  "CREATE TABLE if not exists Profile (id INT, name VARCHAR(255), profilePic VARCHAR(255), createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
