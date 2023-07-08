var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Nate dog",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini message board", messages: messages });
});

module.exports.router = router;
module.exports.messages = messages;

