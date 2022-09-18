const express = require("express");

const server = express();

server.get("/", (request, response) => {
  const year = new Date().getFullYear();
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello, it's ${year}</h1>
      </body>
    </html>
  `);
});

server.get("/uh-oh", (request, response) => {
  response.status(500).send("something went wrong");
});

module.exports = server;
