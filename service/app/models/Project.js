var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var ProjectType = require("./ProjectType");
var ProductImage = require("./ProductImage");

var ProjectSchema = new Schema({
    projectname: {type:String},
    projectposition: {type:String},
    projecttype:[ProjectType.schema],
    projectImages:[ProductImage.schema],
    projectarea:{type:String},
    projectdate:{type:Date},
    projectOrder:{type:Number}
});
mongoose.model('Project', ProjectSchema);