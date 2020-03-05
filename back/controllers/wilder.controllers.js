const Wilders = require('../models/wilders.model.js');

// Create a new wilder
exports.create = (request, response) => {
  if (!request.body.name && !request.body.text) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  // Create a new Wilder
  const wilder = new Wilder({
    name: request.body.name,
    text: request.body.text
  });

  // Save Wilders in the database
  return Wilder.create(wilder, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Wilders.'
      });
    }
    return response.send(data);
  });
};

// Get all wilders
exports.findAll = (request, response) => {
  return Wilder.findAll((error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving wilders.'
      });
    }
    return response.send(data);
  });
};

// Get wilders by ID
exports.findById = (request, response) => {
  return Wilder.findById(request.params.wildersId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Wilder with id ${request.params.wilderId}.`
        });
      }
      return response.status(500).send({
        message: `Error retrieving Wilder with id ${request.params.wilderId}`
      });
    }
    return response.send(dbResult);
  });
};

// Update wilder
exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  return Wilders.update(
    request.params.wilderId,
    new Wilders(request.body),
    (error, data) => {
      if (error) {
        if (error.kind === 'not_found') {
          return response.status(404).send({
            message: `Not found Wilder with id ${request.params.wilderId}.`
          });
        }
        return response.status(500).send({
          message: `Error updating Wilder with id ${request.params.wilderId}`
        });
      }
      return response.send(data);
    }
  );
};

// Delete wilder
exports.delete = (request, response) => {
  return Wilder.delete(request.params.wilderId, error => {
    if (error) {
      if (error.kind === 'not_found') {
        return response.status(404).send({
          message: `Not found Wilder with id ${request.params.wilderId}.`
        });
      }
      return response.status(500).send({
        message: `Could not delete Wilder with id ${request.params.wilderId}`
      });
    }
    return response.send({ message: `Wilder was deleted successfully!` });
  });
};

