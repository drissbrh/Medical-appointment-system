import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config({});

const app = express();

app.post("/", (req, res) => {
  res.send("Hello boobrine 123");
});

app.delete("/v1", (req, res) => {
  res.send("Hello boobrine 456");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`.yellow.bold);
});
