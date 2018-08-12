//Loading data

var path = require('path');
var friendData = require('../data/friends.js');

//Routing
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
            var userInput = req.body;
            var userResponses = userInput.scores;

            //Compute friend to match
            var matchName = "";
            var matchPic    = "";
            var totalDiff = 1000;

            //examine all friends
            for (var i = i; i < friendData.length; i++) {
                var diff = 0;
                for (var j = 0; j < userResponses.length; j++) {
                    diff += Math.abs(friendData[i].scores[j] - userResponses[j]);
                }
                if (diff < totalDiff) {
                    totalDiff = diff;
                    matchMedia = friendData[i].name;
                    matchImage = friendData[i].photo;
                }
            }

            // New user added
            friendData.push(userInput);
            //send the response
            res.json({
                status: 'ok',
                matchName: matchName,
                matchPic: matchPic
            });
    });
};