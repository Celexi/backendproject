var express = require('express');
var router = express.Router();

const fs = require('fs');
const uuidv1 = require('uuid/v1');


router.post('/', function (req, response, next) {
    let file = fs.readFileSync("videos.json" , 'utf8');
    let json = JSON.parse(file);




    json[uuidv1()] = req.body;

    fs.writeFileSync("videos.json", JSON.stringify(json, null, 2));
});

module.exports = router;