const express = require('express');
const wilder = require('../controllers/wilder.controllers');
const verify = require('./middleware/verify');

// Initialize a router
const router = express.Router();

// Read all wilders
router.get('/', wilder.findAll);

// Read wilders by ID
router.get('/:wilderId', wilder.findById);

// Create a new Wilder
router.post('/', verify.verifyToken, verify.verifyAdmin, wilder.create);

// Update wilder
router.put(
  '/:wilderId',
  verify.verifyToken,
  verify.verifyAdmin,
  wilder.update
);

// Delete wilder
router.delete(
  '/:wilderId',
  verify.verifyToken,
  verify.verifyAdmin,
  wilder.delete
);

module.exports = router;
