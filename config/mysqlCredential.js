import dotenv from "dotenv";
dotenv.config();

export const myDB = {
  host: process.env.HOST,
  user: process.env.MYSQLUSER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
};
