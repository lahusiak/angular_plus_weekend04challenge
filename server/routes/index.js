var express = require('express');
var router = express.Router();
var path = require('path');

var pg = require('pg');
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/message_board';
var connectionString = process.env.DATABASE_URL + "?ssl=true" || 'postgres://localhost:5432/message_board';

router.post('/data', function(req,res) {
    //pull data off the request
    //console.log(req.body.userName);

    var addedUser = {
            "name": req.body.userName,
            "message": req.body.newMessage
        };

    pg.connect(connectionString, function (err, client){
        //SQL Query Insert Data
        client.query("INSERT INTO message_board (name, message) VALUES ($1, $2) RETURNING id",
        [addedUser.name, addedUser.message],
            function(err, result){
            if(err){
                console.log("Error inserting data: ", err);
                res.send(false);
            }

            res.send(true);
        })
    })

});

router.get('/data', function(req,res){
    var results = [];

    //SQL Query > SELECT data from table
    pg.connect(connectionString, function (err, client, done) {
        var query = client.query("SELECT * FROM message_board ORDER BY name ASC");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

router.get("/*", function (req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
