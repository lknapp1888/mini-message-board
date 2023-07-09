var express = require("express");
var router = express.Router();
const Message = require('../models/message')

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  messageCreate(req.body.text, req.body.user)
  res.redirect("/");
});

async function messageCreate(text, user) {
  const message = new Message({ text, user });
  await message.save();
  console.log(`Added message: ${text}`);
}

module.exports = router;
