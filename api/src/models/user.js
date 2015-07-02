(function() {

 var mongoose,Schema, UserSchema;

 mongoose = require("mongoose");
 Schema   = mongoose.Schema;

 UserSchema = new Schema({
    email: String,
    password: String
});
mongoose.model('User', UserSchema);

}).call(this);
