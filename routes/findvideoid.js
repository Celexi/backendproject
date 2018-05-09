var express = require('express');
var router = express.Router();

const fs = require('fs');


router.post('/', function (req, response, next) {

    let videoKey = req.query.ID
    let file = fs.readFileSync("videos.json", 'utf8');
    let videos = JSON.parse(file)
    if (videoKey === undefined){
        response.json({message:'empty key'});
        return;
    }
    else{
        for (var i = 0 ; i < videos.length; i++){
            if(videos[i].ID == videoKey){
                response.json(videos[i]);
            }

        }

    }

});

module.exports = router;