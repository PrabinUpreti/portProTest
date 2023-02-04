import { faker } from "../data/faker.js";
export const getProfileMongo = async (req, res, next) => {
  // res.send('<h1 style="text-align:center;">I am From mongo controller</h1>');
  res.json(faker);
};
