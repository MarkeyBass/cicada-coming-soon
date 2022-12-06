import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.send('Comming Soon');
})

app.listen(process.env.PORT || 8800, () => {
  console.log(`Connected to Server on ${process.env.PORT}...`.blue);
});
