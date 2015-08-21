(function() {
	var mongoose = require('mongoose');
	var news = mongoose.model('News');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../core/header'); 
/*----------------------------------------------------------------------*/

exports.Save=function(req, res, next){
   
    var News = new news(req.body);
      News.save(function(err){
            if(err)
            {
            	return res.status(400).send({error:err});
            }
          console.log("news:" +program.newsid +" Has been saved!");
           return res.status(200).send({message:'新闻内容编辑成功!'});              
        });
};


exports.getAllNews = function(req, res, next){

       news.find(function(err,dataResult){
		if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send(dataResult);
	});
};

exports.getNewsByID = function(req, res, next){

news.find({newsid:req.params.id},function(err,dataResult){
    if (err) {
           return res.status(400).send({error:err});
        } 
           return res.status(200).send({data:dataResult}); 
  });
};

exports.deleteNewsByID = function(req, res, next){
  news.remove({newsid:req.params.id},function(err){
           if(err)
            {
              return res.status(400).send({error:err});
            }
             console.log("news:" +req.params.id +" Has been remvoed!");
             return res.status(200).send({message:"新闻删除成功！"});
      });
    };   
/*----------------------------------------------------------------------*/
}).call(this);