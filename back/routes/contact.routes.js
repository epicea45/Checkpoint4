const express = require('express');
const contact = require('../controllers/contact.controllers');
const verify = require('./middleware/verify');

// Initialize a router
const router = express.Router();

// Read all contacts
router.get('/', contact.findAll);

// Read contact by ID
router.get('/:contactId', contact.findById);

// Create a new Contact
router.post('/', verify.verifyToken, verify.verifyAdmin, contact.create);

// Update contact
router.put(
  '/:contactId',
  verify.verifyToken,
  verify.verifyAdmin,
  contact.update
);

// Delete contact
router.delete(
  '/:contactId',
  verify.verifyToken,
  verify.verifyAdmin,
  contact.delete
);

module.exports = router;
