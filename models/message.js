var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
  custom_messages: {type: String, min: 5, max: 1000, required: true},
  signature: {type: String}
});

module.exports = mongoose.model('Message', MessageSchema);