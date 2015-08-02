(function() {
	var mongoose = require('mongoose');
	var person = mongoose.model('Person');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 

exports.Save=function(req, res, next){
    
    var Person=new person(req.body);
      Person.save(function(err){
            if(err)
            {
            	 res.send(400).send({error:err});
            }
            res.status(200).send({message:'团队成员添加成功!'});              
        });
};

exports.getallperson = function(req, res, next){

       person.find(function(err,dataResult){
		if (err) {
           return res.send(400).send({error:err});
        } 
        else {

           return res.status(200).send(dataResult);
           
           
        }
	});
};

exports.deleteperson = function(req, res, next){
      Program.remove({_id:req.params.id},function(err){
           if(err)
            {
              return res.send(400).send({error:err});
            }
             return res.status(200).send({message:"团队成员删除成功！"});
      });
    }; 

}).call(this);