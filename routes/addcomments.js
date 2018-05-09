


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


    videos.COMMENTS.newValue("lola");

});

module.exports = router;







