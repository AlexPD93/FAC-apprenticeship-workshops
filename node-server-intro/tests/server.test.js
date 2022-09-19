const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");

//Why is it async?
test("home route returns expected page", async () => {
  //Where does this 9876 server come from?
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /Hello/);
});

test("check uh-oh route status is 500", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/uh-oh");
  app.close();

  assert.equal(response.status, 500);
  const body = await response.text();
  assert.equal(body, "something went wrong");
});

test("/search returns message including keyword", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/search?keyword=bananas");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /You searched for bananas/);
});

test("check if missing routes return 404 response", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/hello");
  app.close();

  assert.equal(response.status, 404);
  const body = await response.text();
  assert.match(body, /Not found/);
});

test("/submit route responds to POST requests", async () => {
  const app = server.listen(9876);

  const response = await fetch("http://localhost:9876/submit", {
    method: "POST",
    body: "name=oli",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /thanks for submitting, oli/);
});
