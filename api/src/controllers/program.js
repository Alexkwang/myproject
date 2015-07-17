(function() {
	var mongoose = require('mongoose');
	var Program = mongoose.model('Program');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 

exports.Save=function(req, res, next){
    
    var program=new Program(req.body);
     // console.log(newprogram);
      program.save(function(err){
            if(err)
            {
            	 res.send(400).send({error:err});
            }
            res.status(200).send({message:'program Added successful!'});   
            
        });
	
};

exports.viewprogram = function(req, res, next){

	console.log(req);
     header.set(req,res);

       program.find(function(err,dataResult){
		if (err) {
            res.status(500);
           return res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
               return res.json({
                    type: true,
                    data: dataResult
                })
           
        }
	});

};

}).call(this);