var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dotEnv = require('dotenv').load({silent:true});
var apiRoutes = require('./api.js');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT||3000;

mongoose.connect(process.env.MONGODB_URL, function(err){
    if(err){console.log("Oops, error connecting to DB");}
    else{console.log("Connected to DB")}
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use("/api", apiRoutes);
app.listen(port, function(){});
