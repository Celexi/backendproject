var express = require('express');
var router = express.Router();
const fs = require('fs');


router.get('/listperson', function(req, response){
    var file = fs.readFileSync("videos.json");
    response.json(file);

})

module.exports = router;