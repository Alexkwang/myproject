var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ProjecttypeSchema = new Schema({
    typename: String
});
mongoose.model('ProjectType', ProjecttypeSchema);