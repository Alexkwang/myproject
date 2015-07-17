(function() {

 var mongoose,Schema, UserSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 ProgramSchema = new Schema({
     
  	 ProjectName:{type:String, trim: true},
     ProjectType:{type:String, trim: true},
     ProjectEntrust:{type:String, trim: true},
     ProjectPosition:{type:String, trim: true},
     AreaCovered:{type:String, trim: true},
     BuildingArea:{type:String, trim: true},
     VolumeRatio:{type:String, trim: true},
     DesignTime:{type: String},
     DesignDes:{type:String, trim: true},
   	 PrimaryImageNo:Number, 
   	 UploadImgList:[{
   	 	 Numbers:Number,
	     Name:{type:String, trim: true},
	     Url:{type:String, trim: true},
	     ThumbnailUrl:{type:String, trim: true},
	     IsPrimary:Boolean
   	 }]
});
mongoose.model('Program', ProgramSchema);

}).call(this);
