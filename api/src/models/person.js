(function() {

 var mongoose,Schema, PersonSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 PersonSchema = new Schema({
 	personid:Number,
    name: String,
    jobtitle: String,
    record:String,
    imageurl:String
});
mongoose.model('Person', PersonSchema);

}).call(this);
