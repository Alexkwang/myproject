var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ImageSchema = new Schema({
    imageorder: String,
    imagename: String
});
mongoose.model('ProjectImage', ImageSchema);