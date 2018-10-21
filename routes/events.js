var express = require('express');
var router = express.Router();
var  mongojs = require('mongojs');
var MongoClient = mongojs('localhost:27017/event');

router.get('/events', function(req, res, next){
    MongoClient.events.find(function(err, events){
        if(err){
            res.send(err);
        }
        res.json(events);
    });
});

module.exports = router;