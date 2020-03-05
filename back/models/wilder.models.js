const db = require('./database');

const Wilder = function(wilder) {
  this.id = wilder.id;
  this.firstname = wilder.firstname;
  this.photo = wilder.photo;
  this.skills = wilder.skills;
};

Wilder.create = (newWilder, result) => {
  db.query('INSERT INTO wilder SET ?', newWilder, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...newWilder });
  });
};

Wilder.findAll = result => {
  db.query('SELECT * FROM wilder', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Wilder.findById = (wilderId, result) => {
  db.query(
    `SELECT * FROM wilder WHERE id = ${wilderId}`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult[0]);
      }

      // Not found Wilder with the id
      return result({ kind: 'not_found' }, null);
    }
  );
};

Wilder.update = (id, wilder, result) => {
  db.query(
    'UPDATE wilder SET firstname=?, photo=?, skills=? WHERE id = ?',
    [wilder.firstname, wilder.photo, wilder.skills, id],
    (error, response) => {
      if (error) {
        return result(error, null);
      }

      if (response.affectedRows === 0) {
        // Not found Wilder with the id
        return result({ kind: 'not_found' }, null);
      }

      return result(null, { id: Number(id), ...wilder });
    }
  );
};

Wilder.delete = (id, result) => {
  db.query('DELETE FROM wilder WHERE id = ?', id, (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    if (dbResult.affectedRows === 0) {
      // Not found Wilder with the id
      return result({ kind: 'not_found' }, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Wilder;
