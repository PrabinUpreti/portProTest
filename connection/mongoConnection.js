import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const mongoConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.log("Connection fail" + err);
    });
};
