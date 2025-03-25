const mysql = require('mysql2/promise');
const connection = mysql.createPool(process.env.CONNECTION_STRING);

const addStudent = async (students) => {
    const sql = 'INSERT INTO alunos (nome, idade, email) VALUES (?, ?, ?)';
    const values = [students.nome, students.idade, students.email];
    await connection.query(sql, values);
}

module.exports = { addStudent };