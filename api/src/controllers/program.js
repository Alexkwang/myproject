(function() {
	var mongoose = require('mongoose');
	var Program = mongoose.model('Program');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 

exports.Save=function(req, res, next){
    
    var program=new Program(req.body);


      program.save(function(err){
            if(err)
            {
            	return res.status(400).send({error:err});
            }
            console.log("program:" +program.ProjectID +" Has been saved!");
            return res.status(200).send({message:'项目编辑成功!'});   
            
        });
};

exports.getAllProgram = function(req, res, next){

       Program.find(function(err,dataResult){
		if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult);
	});
};

exports.getProgramByClassification=function(req, res, next){

Program
.where('ProjectClassification').equals(req.params.Classification)
.exec(function(err,dataResult){
     if (err) {
           return res.status(400).send({error:err});
        }  
           return res.status(200).send(dataResult);       
  });
};

exports.getbuildProgramByprojecttype=function(req, res, next){
  Program
  .where('ProjectClassification').equals('建筑项目')
  .where('ProjectType').equals(req.params.projecttype)
  .exec(function(err,dataResult){
     if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult);   
  });
};


exports.getplanProgramByprojecttype=function(req, res, next){
  Program
  .where('ProjectClassification').equals('规划项目')
  .where('ProjectType').equals(req.params.projecttype)
  .exec(function(err,dataResult){
     if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult); 
  });
};


exports.getMainprogram=function(req,res,next){

  Program.where('IsShowMainPage').equals(true).limit(12).sort('MainIndex').exec(function(err,dataResult){

      if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult); 
  });

};

exports.getprogramByID = function(req, res, next){


Program.find({ProjectID:req.params.id},function(err,dataResult){
    if (err) {
           return res.status(400).send({error:err});
        } 
        else {
           return res.status(200).send({data:dataResult}); 
        }
  });
};

exports.deleteprogramByID = function(req, res, next){

 

      Program.remove({ProjectID:req.params.id},function(err){
           if(err)
            {
              return res.status(400).send({error:err});
            }
             console.log("Program:" +req.params.id +" Has been remvoed!");
             return res.status(200).send({message:"项目删除成功！"});
      });
    };   


}).call(this);