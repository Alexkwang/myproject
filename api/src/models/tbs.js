(function() {

 var mongoose,Schema, tbsSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 tbsSchema = new Schema({
 	tbsid:Number,
 	tbstitle:{type:String, trim: true},
    tbsdate:{type:String, trim: true},
    tbscontent:{type:String, trim: true},
    primaryurl:{type:String,trim:true},
    uploadimglist:[{
	     Name:{type:String, trim: true},
	     Url:{type:String, trim: true}
   	 }]
});
mongoose.model('TBS', tbsSchema);

}).call(this);