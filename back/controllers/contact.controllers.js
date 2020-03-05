const Contact = require('../models/contact.models');

// Create a new contact
exports.create = (request, response) => {
  if (!request.body.name && !request.body.firstname && !request.body.wilderFirstName && !request.body.mail && !request.body.message) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  // Create a new contact
  const contact = new Contact({
    name: request.body.name,
    firstname: request.body.firstname,
    wilderFirstName: request.body.wilderFirstName,
    mail: request.body.mail,
    message: request.body.message
  });

  // Save Contact in the database
  return Contact.create(contact, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Contact.'
      });
    }
    return response.send(data);
  });
};

// Get all contact
exports.findAll = (request, response) => {
  return Contact.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving contact.'
      });
    }
    return response.send(data);
  });
};

// Get contact by ID
exports.findById = (request, response) => {
  return Contact.findById(request.params.contactId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Contact with id ${request.params.contactId}.`
        });
      }
      return response.status(500).send({
        message: `Error retrieving Contact with id ${request.params.contactId}`
      });
    }
    return response.send(dbResult);
  });
};

// Update contact
exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  return Contact.update(
    request.params.contactId,
    new Contact(request.body),
    (error, data) => {
      if (error) {
        if (error.kind === 'not_found') {
          return response.status(404).send({
            message: `Not found Contact with id ${request.params.contactId}.`
          });
        }
        return response.status(500).send({
          message: `Error updating contact with id ${request.params.contactId}`
        });
      }
      return response.send(data);
    }
  );
};

// Delete contact
exports.delete = (request, response) => {
  return Contact.delete(request.params.contactId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Contact with id ${request.params.contactId}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete Contact with id ${request.params.contactId}`
      });
    }
    return response.send({ message: `This contact was deleted successfully!` });
  });
};

