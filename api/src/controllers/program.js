(function() {
	var mongoose = require('mongoose');
	var program = mongoose.model('Program');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 

exports.Save=function(req, res, next){
    
    console.log(req);

     header.set(req,res);

     
	program.create(req.body,function(err){

		if(err!=null)
		{
			return next(new Error("Save data failed. " + err));
		}
		else {
			return res.end();
		}	
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