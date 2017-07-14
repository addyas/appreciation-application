var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = Schema({
  name: {type: String, min: 3, max: 100, required: true},
  relation: {type: String, enum: ['Dad', 'Mom', 'Grandma', 'Grandpa', 'Partner', 'Friend']},
  vibe: {type: String, enum:  ['Easygoing', 'Fun', 'Lovely', 'Driven', 'Silly', 'Cool']}
});

PersonSchema.virtual('Welcome').get(function(){
  return 'Hey ' + this.name + ", someone thinks you're a real " + this.vibe + ' kind of person.';
});

PersonSchema.virtual('url').get(function(){
  return '/' + this._id;
});

module.exports = mongoose.model('Person', PersonSchema);