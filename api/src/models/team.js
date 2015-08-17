(function() {

 var mongoose,Schema, TeamSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 TeamSchema = new Schema({
 	teamid:Number,
    imageurl:{type:String, trim: true},
    imagename:{type:String, trim: true}
});
mongoose.model('Team', TeamSchema);

}).call(this);
