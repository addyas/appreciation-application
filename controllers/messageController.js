var Message = require('../models/message');



exports.message_create_get = function(req,res){
  res.render('message_form', {title: 'howdy, message creation here'});
};

exports.message_create_post = function(req, res, next){
  
  var message = new Message({
    custom_messages: req.body.custom_messages
  });
  
  message.save(function (err) {
            if (err) { return next(err); }
               //successful - redirect to new person's page
               res.redirect('/');
            });
  
};