var express = require("express");
var router = express.Router();
let messages = require('./index').messages;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  console.log(messages)
  res.redirect("/");
});

module.exports = router;
