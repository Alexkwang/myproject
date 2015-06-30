var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ProjecttypeSchema = new Schema({
    projecttypename: String
});
mongoose.model('ProjectType', ProjecttypeSchema);