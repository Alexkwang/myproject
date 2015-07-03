(function() {
	var mongoose = require('mongoose');
	var user = mongoose.model('User');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 
exports.viewUser = function(req, res, next){
    header.set(req,res);
     user.find(function(err,dataResult){
		if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
                res.json({
                    type: true,
                    data: dataResult
                })
           
        }
	});
};

exports.viewUserbyId=function(req, res, next){
header.set(req,res);
 user.findById(new ObjectId(req.params.id), function(err, dataResult) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (dataResult) {
                res.json({
                    type: true,
                    data: dataResult
                })
            } else {
                res.json({
                    type: false,
                    data: "User: " + req.params.id + " not found"
                })
            }
        }
    })
};


}).call(this);