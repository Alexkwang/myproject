var mongoose = require('mongoose');
var global;
global.dbHelper = require('./common/dbHelper');

  //User = mongoose.model("./user"),
  ObjectId = mongoose.Types.ObjectId;

var User=global.dbHelper.getModel('user');

exports.viewUser = function(req, res, next) {
  User.find(function(err, callbackdata) {
    if (err) {
      res.status(500);
      res.json({
        type: false,
        data: "Error occured: " + err
      })
    } else {
      if (callbackdata) {
        res.json({
          type: true,
          data: callbackdata
        })
      } else {
        res.json({
          type: false,
          data: "User: not found"
        })
      }
    }
  })
}


// exports.viewUser = function(req, res, next) {
//   Article.findById(new ObjectId(req.params.id), function(err, callbackdata) {
//     if (err) {
//       res.status(500);
//       res.json({
//         type: false,
//         data: "Error occured: " + err
//       })
//     } else {
//       if (callbackdata) {
//         res.json({
//           type: true,
//           data: callbackdata
//         })
//       } else {
//         res.json({
//           type: false,
//           data: "Article: " + req.params.id + " not found"
//         })
//       }
//     }
//   })
// }


