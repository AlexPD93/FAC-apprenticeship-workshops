const express = require("express");

const server = express();

//What does this do?
const bodyParser = express.urlencoded();

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
    <label for="hex">Enter Hex to change background</label>
    <input name="hex" >
    </form>
    `;
  //Forms will use get method by default.
  // Name and value are key value pair for input.
  response.send(html);
});

// Challenge 4 & 5
const cheeses = [];

server.get("/cheese", (request, response) => {
  const list = cheeses.map((cheese) => {
    return `<li> ${cheese.name} | ${cheese.rating}</li>`;
  });
  const html = `
    <form action="/cheese" method="POST">
    <label for="cheeseName">Cheese name</label>
    <input name="cheeseName" >
    <label for="rating">Rating</label>
    <input type="range" name="rating" main="0" max="5">
    <button type="submit">Rate Cheese</button>
    </form>
    <ul>
    ${list.join(" ")}
    </ul>
    `;
  //Join used to get rid of commas
  response.send(html);
});

server.post("/cheese", bodyParser, (request, response) => {
  const name = request.body.cheeseName;
  const rating = request.body.rating;

  //Create an object with name and rating key value pairs
  cheeses.push({ name, rating });

  //Send the response back to /cheese
  response.redirect("/cheese");
});

module.exports = server;
