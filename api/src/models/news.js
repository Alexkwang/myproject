(function() {

 var mongoose,Schema, NewsSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 NewsSchema = new Schema({
 	newsid:Number,
 	newstitle:{type:String, trim: true},
    newsdate:{type:String, trim: true},
    newscontent:{type:String, trim: true},
    primaryurl:{type:String,trim:true},
    uploadimglist:[{
	     Name:{type:String, trim: true},
	     Url:{type:String, trim: true}
   	 }]
});
mongoose.model('News', NewsSchema);

}).call(this);