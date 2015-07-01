var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var ProjectType = require("./ProjectType");
var ProductImage = require("./ProductImage");

var ProjectSchema = new Schema({
    name: {type:String},
    position: {type:String},
    yype:[ProjectType.schema],
    images:[ProductImage.schema],
    area:{type:String},
    date:{type:Date},
    number:{type:Number}
});
mongoose.model('Project', ProjectSchema);