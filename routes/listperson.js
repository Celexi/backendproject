var express = require('express');
var router = express.Router();
const fs = require('fs');
var bodyParser = require('body-parser');
var file1 = require('\Users\Celex\backendproject\code\backendproject\videos.json')
import file1 from 'C:\Users\Celex\backendproject\code\backendproject\videos.json'
router.get('/listPerson', function(req, response){

    response.send(file1);

}

module.exports = router;