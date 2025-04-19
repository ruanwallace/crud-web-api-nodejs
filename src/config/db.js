const mysql = require('mysql2/promise');
const connection = mysql.createPool(process.env.CONNECTION_STRING);

module.exports = connection;
