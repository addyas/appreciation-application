var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
  custom_messages: [String]
});

module.exports = mongoose.model('Message', MessageSchema);