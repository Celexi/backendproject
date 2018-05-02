var express = require('express');
var router = express.Router();
const fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


function readFile(path){
    var file = fs.readFileSync(path, 'utf-8');
    return file;
}

router.get('/listPerson', function(req, response){
    var file = fs.readFileSync("videos.json");
    response.json(file);

})

module.exports = router;