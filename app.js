import express from "express";
import {
  mysqlConnection,
  mongoConnection,
  firebaseConnection,
} from "./connection/index.js";
import { appRouter } from "./routes/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoConnection();
mysqlConnection();
firebaseConnection();

app.use("/", appRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is running at http://localhost:${process.env.PORT}`)
);
