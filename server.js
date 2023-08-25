const express = require("express");
const http = require("http");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.use((req, res) => {
  res.status(200).json({ message: "OK" });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
