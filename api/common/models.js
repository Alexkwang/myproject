var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String
});
mongoose.model('User', UserSchema);