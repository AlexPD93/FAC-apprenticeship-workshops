const { createSession } = require("../model/session.js");
const bcrypt = require("bcryptjs");
const { getUserByEmail } = require("../model/user.js");
const { Layout } = require("../templates.js");

function get(req, res) {
  const title = "Log in to your account";
  const content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <form method="POST" class="Row">
        <div class="Stack" style="--gap: 0.25rem">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="password">password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button class="Button">Log in</button>
      </form>
    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

function post(req, res) {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!email || !password || !user) {
    return res.status(400).send("<h1>Login failed</h1>");
  }
  bcrypt.compare(password, user.hash).then((match) => {
    if (!match) {
      return res.status(400).send("<h1>Login failed</h1>");
    } else {
      const sessionId = createSession(user.id);
      res.cookie("sid", sessionId, {
        signed: true,
        httpOnly: true,
        maxAge: 6000,
        sameSite: "lax",
      });
      res.redirect(`/confessions/${user.id}`);
    }
  });
  // Use getUserByEmail from model/user.js to get the user who is trying to log in

  // If there's no user with that email send a 400 error response

  // Compare the submitted password to the stored user's hash

  // If they don't match send the same error response

  // Important: don't say exactly what went wrong, otherwise you'll give attackers information like which emails have accounts in your app

  // If they match use the createSession function you wrote to insert a new session into the DB

  // Set a signed sid cookie containing the session ID

  // Redirect to the new user's confession page (e.g. /confessions/11)
  /**
   * [1] Compare submitted password to stored hash
   * [2] If no match redirect back to same page so user can retry
   * [3] If match create a session with their user ID,
   *     set a cookie with the session ID,
   *     redirect to the user's confession page (e.g. /confessions/3)
   */
}

module.exports = { get, post };
