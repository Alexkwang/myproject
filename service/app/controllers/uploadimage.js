var mongoose = require('mongoose');
var User = mongoose.model("User");
var header = require('./../core/header');
var ObjectId = mongoose.Types.ObjectId;


exports.uploadImage=function(req, res){
	 //设置请求头允许跨越请求
	 header.set(req,res);
	 //文件上传路径
 	var srcPath = req.files.upload.ws.path;

 	var desPath = './upload/' + '1'+ '.png';

 	 fs.rename(srcPath, desPath, function(err) {
                    if (err) {
                        return res.send(str);
                    } else {
                        //删除原有文件
                        fs.unlink(srcPath, function() {
                            if (err) {
                                return res.send(str);
                            }
                            //显示文件
                            fs.readFile(desPath, "binary", function(error, file) {
                                if (error) {
                                    return res.send(str);
                                } else {
                                    var query = {token: mongoskin.helper.toObjectID(token)};
                                    var $set = {$set: {avatar: 'http://127.0.0.1:3000/' +'1' + '.png'}
                                    };
                                    db.user.update(query, $set, function(err) {
                                          return res.send(str);
                                    });
                                }
                            });

                        });

                    }
                });

};