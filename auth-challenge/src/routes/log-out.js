const { removeSession } = require("../model/session.js");

function post(req, res) {
  const sessionId = req.signedCookies.sid;
  removeSession(sessionId);
  res.clearCookie("sid");
  res.redirect("/");
}

module.exports = { post };
