var Person = require('../models/person');

exports.index = function(req,res){
  res.render('person_form', { title: 'Who is this message for?'});
};

exports.person_create_get = function(req, res){
    res.render('person_form', { title: 'Who is this letter for?'});
};

exports.person_create_post = function(req, res, next){
  
  console.log('inside person_Create_post');
   var person = new Person({
     name: req.body.name,
     relation: req.body.relation,
     vibe: req.body.vibe
   });
  
   
  person.save(function (err) {
            if (err) { return next(err); }
               console.log("This is the person id right at creation:" + person.id)
               //successful - redirect to new person's page
               res.redirect('/appreciation'+person.url+'/messages');
               //res.send(person.name + ' created');
            });
  
};

exports.genre_list = function(req,res){
  res.send('not yet implemented genre list');
};

// Display detail page for a specific Genre
exports.genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

// Display Genre create form on GET
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

