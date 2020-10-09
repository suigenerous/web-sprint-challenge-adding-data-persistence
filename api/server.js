const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());


server.get("/", (req, res) => {
  res.status(200).json({ api: "working" });
});

module.exports = server;
