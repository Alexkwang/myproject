(function() {

 var mongoose,Schema, PersonSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 PersonSchema = new Schema({
 	personid:Number,
    name: {type:String, trim: true},
    engilshname:{type:String, trim: true},
    jobtitle: {type:String, trim: true},
    engilshjobtitle:{type:String, trim: true},
    record:{type:String, trim: true},
    imageurl:{type:String, trim: true},
    imagename:{type:String, trim: true}
});
mongoose.model('Person', PersonSchema);

}).call(this);
