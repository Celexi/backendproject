var express = require('express');
var router = express.Router();
const uuidv1 = require('uuid/v1');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(uuidv1())




});

module.exports = router;
