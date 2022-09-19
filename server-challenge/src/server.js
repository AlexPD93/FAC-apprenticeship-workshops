const express = require("express");

const server = express();

//Challenge 1
server.get("/", (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
  `);
});

//Challenge 2 & 3
server.get("/colour", (request, response) => {
  //what is difference between request and response?
  const hex = request.query.hex || `ffffff`;
  const html = `
    <style>
    body {
        background-color: #${hex};
    }
    </style>
    <form>
    <label for="hex">Enter Hex</label>
    <input name="hex" value="${hex}">
    </form>
    `;
  // Name and value are key value pair for input.
  response.send(html);
});

server.get("/cheese", (request, response) => {
  const html = `
    <form action="/cheese" method="POST">
    <label for="cheeseName">Cheese name</label>
    <input name="cheeseName" >
    <label for="rating">Rating</label>
    <input type="range" name="rating" main="0" max="5">
    </form>
    `;
  response.send(html);
});

module.exports = server;
