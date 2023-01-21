import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.static('public'))

app.listen(process.env.PORT || 5005, 'localhost',() => {
  console.log(`Connected to Server on ${process.env.PORT}...`.blue);
});
