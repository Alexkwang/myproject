(function() {
  var LogSchema, Schema, mongoose;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  LogSchema = new Schema({
    DataType: String,
    DataKey: String,
    LastEditUser: String,
    LastEditDate: {
      type: Date,
      "default": Date.now
    },
    DataValue: {}
  });

  mongoose.model("Log", LogSchema);

}).call(this);
