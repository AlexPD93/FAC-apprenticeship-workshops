const {
  listConfessions,
  createConfession,
} = require("../model/confessions.js");
const { getSession } = require("../model/session.js");
const { Layout } = require("../templates.js");

function get(req, res) {
  const sessionId = req.signedCookies.sid;
  const session = getSession(sessionId);

  //why does this console.log as undefined?
  const loggedIn = session && session.user_id;
  const owner = Number(req.params.user_id);

  if (owner !== loggedIn) {
    return res.status(401).send("<h1>You aren't allowed to see that</h1>");
  }

  const confessions = listConfessions(req.params.user_id);
  const title = "Your secrets";
  const content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <form method="POST" class="Stack" style="--gap: 0.5rem">
        <textarea name="content" aria-label="your confession" rows="4" cols="30" style="resize: vertical"></textarea>
        <button class="Button">Confess 🤫</button>
      </form>
      <ul class="Center Stack">
        ${confessions
          .map(
            (entry) => `
            <li>
              <h2>${entry.created_at}</h2>
              <p>${entry.content}</p>
            </li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

function post(req, res) {
  const sessionId = req.signedCookies.sid;
  const session = getSession(sessionId);

  const loggedIn = session && session.user_id;

  if (!loggedIn) return res.status(401).send("<h1>No No No!</h1>");
  createConfession(req.body.content, loggedIn);
  res.redirect(`/confessions/${loggedIn}`);
}

module.exports = { get, post };
