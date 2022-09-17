const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("hello");
});

server.get("/uh-oh", (request, response) => {
  response.status(500).send("something went wrong");
});

module.exports = server;
