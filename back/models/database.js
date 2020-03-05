const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('Successfully connected to the database');
});

module.exports = connection;
