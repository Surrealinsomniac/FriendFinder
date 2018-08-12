var express = require("express");
var path = require("path");
var friendsDB = require("../data/friends");

var app = express();

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsDB);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        for (var i = 0; i < friendsDB.length; i ++) {
            var scoreDiff = 0;
            
            for (var j = 0; j < newScore.length; j ++) {
                scoreDiff += (Math.abs(parseInt(friendsDB[i].scores[j]) - parseInt(newScore[j])));
            }
            scoresArray.push(scoreDiff);
        }
        for (var i = 0; i < scoresArray.length; i ++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        var bestFriend = friendsDB[bestMatch];

        res.json(bestFriend);

        friendsDB.push(newFriend);
    });


};