(function() {
	var mongoose = require('mongoose');
	var team = mongoose.model('Team');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 

exports.Save=function(req, res, next){
    
    var Team=new team(req.body);
      Team.save(function(err){
            if(err)
            {
            	return res.status(400).send({error:err});
            }
             console.log("teams:" +Team._id +" Has been saved!");
           return res.status(200).send({message:'团队信息编辑成功!'});              
        });
};

exports.getteam = function(req, res, next){

       team.find(function(err,dataResult){
		if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult);
	});
};

exports.deleteteam = function(req, res, next){
      team.remove({_id:req.params.id},function(err){
           if(err)
            {
              return res.status(400).send({error:err});
            }
             console.log("teams:" +req.params.id +" Has been remvoed!");
             return res.status(200).send({message:"团队信息删除成功！"});
      });
    }; 

}).call(this);