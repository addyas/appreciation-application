var Message = require('../models/message');
var Person = require('../models/person');



exports.message_create_get = function(req,res){
  res.render('message_form', {title: 'howdy, message creation here'});
};

exports.message_create_post = function(req, res, next){
  console.log('message_Create_post')
  var message = new Message({
    custom_messages: req.body.custom_messages,
    signature: req.body.signature
  });
  
  var messageArr = message.custom_messages.split('.');
  var person_id = req.params.id;
  var returnPerson ={};
  console.log("This is the id param passed:"+person_id);
  Person.findById(person_id, function(err, person){
     if(err) {throw err;}
     returnPerson.name = person.name;
     returnPerson.relation = person.relation;
     returnPerson.vibe = person.vibe;
     console.log(returnPerson.name,returnPerson.relation, returnPerson.vibe);
  });
  
  message.save(function (err) {
            if (err) { return next(err); }
               //successful - redirect to new person's page
               console.log(req.params.id);
               res.render('messages_animation', {message_list: messageArr, person_name: returnPerson.name, person_relation: returnPerson.relation, person_vibe: returnPerson.vibe});
            });
  
};

exports.messages_show = function(req,res, next){
  
  console.log('will show messages here');
};