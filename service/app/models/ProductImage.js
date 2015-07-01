var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ImageSchema = new Schema({
    number: String,
    imagename: String,
    url:String,
    IsPrimary:{type:Boolean}
});
mongoose.model('ProjectImage', ImageSchema);