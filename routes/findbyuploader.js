var express = require('express');
var router = express.Router();
const fs = require('fs');


Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
            if( this[ prop ] === value )
                return prop;
        }
    }
}

router.post('/', function (req, response, next) {

    let videoKey = req.query.ID
    let file = fs.readFileSync("videos.json", 'utf8');
    let videos = JSON.parse(file)
    if (videoKey === undefined) {
        response.json({message: 'empty key'});
        return;
    }
//     else if (findvideo(videos)=== 2){
//
//         response.json("video does not exist")
//
//     }
else
    {
        for (var i = 0; i < videos.length; i++) {
            if (this.hasOwnProperty(videoKey)) {
                response.json(videos[i]);
            }

        }

    }


});

module.exports = router;