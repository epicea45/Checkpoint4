const db = require('./database');

const Contact = function(contact) {
  this.id = contact.id;
  this.name = contact.name;
  this.firstname = contact.firstname;
  this.wilderFirstName = contact.wilderFirstName;
  this.mail = contact.mail;
  this.message = contact.message;
};

Contact.create = (newContact, result) => {
  db.query('INSERT INTO contact SET ?', newContact, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...newContact });
  });
};

Contact.findAll = result => {
  db.query('SELECT * FROM contact', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Contact.findById = (contactId, result) => {
  db.query(
    `SELECT * FROM contact WHERE id = ${contactId}`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult[0]);
      }

      // Not found Contact with the id
      return result({ kind: 'not_found' }, null);
    }
  );
};

Contact.update = (id, contact, result) => {
  db.query(
    'UPDATE contact SET name=?, firstname=?, wilderFirstName=?, mail=?, message=? WHERE id = ?',
    [contact.name, contact.firstname, contact.wilderFirstName, contact.mail, contact.message, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found Contact with the id
        return result({ kind: 'not_found' }, null);
      }

      return result(null, { id: Number(id), ...contact });
    }
  );
};

Contact.delete = (id, result) => {
  db.query('DELETE FROM contact WHERE id = ?', id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found Contact with the id
      return result({ kind: 'not_found' }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Contact;
