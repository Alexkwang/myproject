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
            	 res.send(400).send({error:err});
            }
            res.status(200).send({message:'项目添加成功!'});   
            
        });
};

exports.viewprogram = function(req, res, next){

       Program.find(function(err,dataResult){
		if (err) {
           return res.send(400).send({error:err});
        } 
        else {

           return res.status(200).send(dataResult);
           
           
        }
	});


       // return res.status(200).send([{
//     "id": 860,
//     "firstName": "Superman",
//     "lastName": "Yoda"
// }, {
//     "id": 870,
//     "firstName": "Foo",
//     "lastName": "Whateveryournameis"
// }]);

};
exports.getprogramByID = function(req, res, next){


Program.find({ProjectID:req.params.id},function(err,dataResult){
    if (err) {
           return res.send(400).send({error:err});
        } 
        else {
           return res.status(200).send({data:dataResult}); 
        }
  });
};

exports.deleteprogramByID = function(req, res, next){

 

      Program.remove({_id:req.params.id},function(err){
           if(err)
            {
              return res.send(400).send({error:err});
            }
             return res.status(200).send({message:"项目删除成功！"});
      });
    };   


}).call(this);