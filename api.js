var bodyParser = require('body-parser');
var express = require('express');
var apiRouter = express.Router();
var Photo = require('./models/koan.js');

apiRouter.get('/koans', function(req,res){
    Koan.find({}, function(err, koans){
        res.json(koans);
    });
});

apiRouter.get('/koans/:id', function(req,res){
    Koan.findOne({_id: req.params.id},function(err,photo){
        res.json(photo);
    })
})

module.exports=apiRouter;