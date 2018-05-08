var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');



router.get('/', function(req, response, next){
    var file = fs.readFileSync("videos.json" , 'utf8');
    response.json(JSON.parse(file));
})

module.exports = router;