(function() {
	var mongoose = require('mongoose');
	var user = mongoose.model('User');
	var ObjectId = mongoose.Types.ObjectId;
	var header = require('./../common/header');
    var logger = require("../common/logger");
    
exports.viewUser = function(req, res, next){
	logger.log("333333");
   //  header.set(req,res);
	  // res.setHeader('Access-Control-Allow-Origin', '*');
		//res.setHeader("Access-Control-Allow-Headers", 'X-Requested-With,application/json');
		//res.setHeader('Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS');
		//res.header('Access-Control-Allow-Credentials', true);
	 
return;

     user.find(function(err,data){
		if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
                res.json({
                    type: true,
                    data: User
                })
           
        }
	});
};





// exports.viewUserbyId=function(req, res, next){
//     logger.log("11111");

//        res.setHeader('Access-Control-Allow-Origin', '*');
// 		res.setHeader("Access-Control-Allow-Headers", 'X-Requested-With,application/json');
// 		res.setHeader('Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS');
// 		res.header('Access-Control-Allow-Credentials', true);
//  User.findById(new ObjectId(req.params.id), function(err, User) {
//         if (err) {
//             res.status(500);
//             res.json({
//                 type: false,
//                 data: "Error occured: " + err
//             })
//         } else {
//             if (User) {
//                 res.json({
//                     type: true,
//                     data: User
//                 })
//             } else {
//                 res.json({
//                     type: false,
//                     data: "User: " + req.params.id + " not found"
//                 })
//             }
//         }
//     })
// };


}).call(this);