var express = require('express');
var router = express.Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');


router.get('/', function (req, response) {
    var pessoa = req.body;
    var id = uuidv1();
    var file = fs.readFileSync("personsbak.json" , 'utf8');
    var jsonData = JSON.parse(file);
    pessoa.id = id;
    jsonData["video" + id] = pessoa;


    let data = JSON.stringify(pessoa, null, 2);
    jsonData[pessoa.id].push(data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
})

module.exports = router;