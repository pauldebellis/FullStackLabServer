var bodyParser = require('body-parser');
var express = require('express');
var apiRouter = express.Router();
var Koan = require('./models/koan.js');

apiRouter.get('/koans', function(req,res){
    Koan.find({}, function(err, koans){
        res.json(koans);
    });
});

apiRouter.get('/koans/:id', function(req,res){
    Koan.findOne({_id: req.params.id},function(err,photo){
        res.json(photo)
    });
});

apiRouter.post('/koans', function(req,res){
    Koan.create(req.body,function(err,koan){
        res.json(koan)
    });
});

apiRouter.delete('/koans/:id', function(req,res){
    Koan.findOneAndRemove({_id: req.params.id}, function(err){
        res.json({message: "Photo deleted", success:true})
    });
});

apiRouter.patch('/koans/:id', function(req,res){
    Koan.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, koan){
        res.json({message: "Koan updated", koan: koan});
    });
});

module.exports=apiRouter;