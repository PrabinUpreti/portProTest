import express from "express";
import {
  mongoConnection,
  mysqlConnection,
  firebaseConnection,
} from "./connection/index.js";
import { appRouter } from "./routes/router.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set("json spaces", 4);

mongoConnection();
mysqlConnection(function () {});
firebaseConnection();

app.use("/", appRouter);

app.listen(process.env.EXPRESSPORT, () =>
  console.log(
    `Server is running at http://localhost:${process.env.EXPRESSPORT}`
  )
);
