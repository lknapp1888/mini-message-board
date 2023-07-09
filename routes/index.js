var express = require('express');
var router = express.Router();
const Message = require('../models/message')

require('dotenv').config()

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find().exec()
  res.render('index', { title: "Mini message board", messages: messages });
});

module.exports.router = router;


