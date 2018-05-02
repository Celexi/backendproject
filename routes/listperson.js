var express = require('express');
var router = express.Router();
const fs = require('fs');
var bodyParser = require('body-parser');



router.get('/listPerson', function(req, response){
    var file = fs.readFileSync("C:\\Users\\Celex\\backendproject\\code\\backendproject\\videos.json");
    response.send(file);

}

module.exports = router;