var mongoose = require('mongoose');
var User = mongoose.model("User");
var header = require('./../core/header');
var ObjectId = mongoose.Types.ObjectId;


exports.uploadImage=function(req, res){
	 //设置请求头允许跨越请求
	 header.set(req,res);
	 //文件上传路径
 	var srcPath = req.files.upload.ws.path;
};