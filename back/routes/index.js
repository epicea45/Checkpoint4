const express = require('express');

const router = express.Router();

const contact = require('./contact.routes');

router.use('/contact', contact);

module.exports = router;