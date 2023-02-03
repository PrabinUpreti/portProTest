import express from "express";
export const appRouter = express.Router();

// import Controller
import { getRootData } from "../controllers/getRootData.js";
import { getProfileMongo } from "../controllers/getProfileMongo.js";
import { getProfileMysql } from "../controllers/getProfileMysql.js";
import { getProfileFirebase } from "../controllers/getProfileFirebase.js";

// import middleware

// api routes
appRouter.get("/", getRootData);
appRouter.get("/v1/user", getProfileMongo);
appRouter.get("/v2/user", getProfileMysql);
appRouter.get("/v3/user", getProfileFirebase);
