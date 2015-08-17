(function() {
	var mongoose = require('mongoose');
	var tbs = mongoose.model('TBS');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 
/*----------------------------------------------------------------------*/

exports.Save=function(req, res, next){
   
    var TBs = new tbs(req.body);
      TBs.save(function(err){
            if(err)
            {
            	 res.status(400).send({error:err});
            }
            res.status(200).send({message:'团队活动编辑成功!'});              
        });
};


exports.getAllTBs = function(req, res, next){

       tbs.find(function(err,dataResult){
		if (err) {
           return res.status(400).send({error:err});
        } 
        else {

           return res.status(200).send(dataResult);
           
           
        }
	});
};

exports.getTBsByID = function(req, res, next){

tbs.find({tbsid:req.params.id},function(err,dataResult){
    if (err) {
           return res.status(400).send({error:err});
        } 
        else {
           return res.status(200).send({data:dataResult}); 
        }
  });
};

exports.deleteTBsByID = function(req, res, next){
  tbs.remove({tbsid:req.params.id},function(err){
           if(err)
            {
              return res.status(400).send({error:err});
            }
             return res.status(200).send({message:"团队活动删除成功！"});
      });
    };   
/*----------------------------------------------------------------------*/
}).call(this);