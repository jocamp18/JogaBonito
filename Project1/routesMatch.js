// app/routes.js

// grab the nerd model we just created

/*var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jocamp18:lfmDXW84@ds033259.mlab.com:33259/jogadb',['matches']);

router.get('/matches',function(req, res, next){
    db.matches.find(function(err, matches){
        if(err){
            res.send(err);
        }
        res.json(matches);
    })
});*/



var Match = require('./models/match');
var mongoose = require('mongoose');
var db = require('./config/db');
mongoose.connect(db.url); 
    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes
        app.post('/new', function(req, res){
            var del = new Match({
                position: req.body.position,
                date    : req.body.date,
                time    : req.body.time1
            });
            del.save(function(err){
                if(err) throw err;
            });
        });
        // sample api route
        app.get('/api/matches', function(req, res) {
            // use mongoose to get all nerds in the database
            Match.find(function(err, matches) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json(matches); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };