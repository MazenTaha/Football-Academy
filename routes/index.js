const express = require('express');
const router = express.Router();
const controller = require('../controllers/registrationController');

router.get('/register', controller.getForm);
router.post('/register', controller.submitForm);

module.exports = router;