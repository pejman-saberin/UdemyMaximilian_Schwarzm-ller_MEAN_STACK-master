var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('index');   //this will rendor the angular application
});



module.exports = router;
