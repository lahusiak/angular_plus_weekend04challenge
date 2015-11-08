var express = require('express');
var app = express ();
var index = require("./routes/index");

var bodyParser = require('body-parser');

var pg = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.set("port", process.env.PORT || 5000);

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port : ", app.get("port"));
});