var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');
var message_controller = require('../controllers/messageController');
var person_controller = require('../controllers/personController');


//index
router.get('/', person_controller.index);


router.post('/', person_controller.person_create_post);

router.get('/:id/messages', message_controller.message_create_get);
router.post('/:id/messages', message_controller.message_create_post);


/* GET request for creating a Book. NOTE This must come before routes that display Book (uses id) */
router.get('/book/create', book_controller.book_create_get);

/* POST request for creating Book. */
router.post('/book/create', book_controller.book_create_post);

/* GET request to delete Book. */
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request to delete Book
router.post('/book/:id/delete', book_controller.book_delete_post);

/* GET request to update Book. */
router.get('/book/:id/update', book_controller.book_update_get);

// POST request to update Book
router.post('/book/:id/update', book_controller.book_update_post);

/* GET request for one Book. */
router.get('/book/:id', book_controller.book_detail);

/* GET request for list of all Book items. */
router.get('/books', book_controller.book_list);




/// AUTHOR ROUTES ///

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */

/* POST request for creating Author. */
router.post('/message/create', message_controller.message_create_post);



/// PERSON ROUTES ///

router.get('/person/create', person_controller.person_create_get);
router.post('/person/create', person_controller.person_create_post);



module.exports = router;