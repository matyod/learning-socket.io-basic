import { config } from "dotenv";

config({
  encoding: "utf8",
  path: `.env.${process.env.NODE_ENV}`,
  debug: true,
});

export const { PORT } = process.env;
