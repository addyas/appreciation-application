var express = require('express');
var router = express.Router();

var message_controller = require('../controllers/messageController');
var person_controller = require('../controllers/personController');


//index
router.get('/', person_controller.index);
router.post('/', person_controller.person_create_post);

router.get('/:id/messages', message_controller.message_create_get);
router.post('/:id/messages', message_controller.message_create_post);




/* POST request for creating Author. */
router.post('/message/create', message_controller.message_create_post);
/// PERSON ROUTES ///

router.get('/person/create', person_controller.person_create_get);
router.post('/person/create', person_controller.person_create_post);



module.exports = router;