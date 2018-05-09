var express = require('express');
var router = express.Router();

const fs = require('fs');
const uuidv1 = require('uuid/v1');

router.delete('/', function (req, response, next) {

    let deletionKey = req.query.ID
    if (deletionKey.length === 0) {
        response.json({message:'error: no deletion key'});
        return;
    } else {
        console.log("deletion key is: " + deletionKey)
    }
    let file = fs.readFileSync("videos.json", 'utf8');
    let videos = JSON.parse(file);
    if (videos.length === 0) {
        console.log("videos.json issue")
    }
    console.log(videos)
    let newVideos = []
    for (video in videos) {
        if (video == deletionKey) {
            // don't add the videos with the deletion key to the new video array
            response.json({message:'match found'});
        } else {
            newVideos.push(videos[video])
            console.log(videos)
        }
    }
    fs.writeFileSync("videos.json", JSON.stringify(newVideos, null, 2));
});

module.exports = router;