var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');


router.post('/', function (req, response, next) {
    let file = fs.readFileSync("videos.json" , 'utf8');
    let json = JSON.parse(file);
    for (let [k, v] of Object.entries(json)) {
        v.ID = uuidv1();
    }

    fs.writeFileSync(JSON.stringify(json));
});

module.exports = router;