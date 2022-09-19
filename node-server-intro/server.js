//What does this do?
const express = require("express");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

const bodyParser = express.urlencoded();

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
        <h1>Hello</h1>
      </body>
    </html>
  `);
});

//Post requests. Why does this need to be at the top?
server.post("/submit", bodyParser, (request, response) => {
  const name = request.body.name;
  response.redirect(`/submit/success?name=${name}`);
});

server.get("/submit/success", (request, response) => {
  const name = request.query.name;
  response.send(`<p>thanks for submitting, ${name}</p>`);
});

//Middleware. What is it used for?? They both act the same but function is better

// server.get("/", (request, response, next) => {
//   console.log(request.method + " " + request.url);
//   next();
// });

// server.get("/", (request, response) => {
//   response.send(`...`);
// });

function logger(request, response, next) {
  console.log(request.method + " " + request.url);
  next();
}

server.get("/", logger, (request, response) => {
  response.send(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello</h1>
      </body>
    </html>`);
});

server.use(logger);

//Dynamic paths
server.get("/users/:name", (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});

//Status code
server.get("/uh-oh", (request, response) => {
  response.status(500).send("something went wrong");
});

//Search parameters
server.get("/search", (request, response) => {
  const keyword = request.query.keyword;
  response.send(`<p>You searched for ${keyword}</p>`);
});

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

module.exports = server;
