const mysql = require('mysql2/promise');
const connection = mysql.createPool(process.env.CONNECTION_STRING);

const addStudent = async (students) => {
    const sql = 'INSERT INTO alunos (nome, idade, email) VALUES (?, ?, ?)';
    const values = [students.nome, students.idade, students.email];
    await connection.query(sql, values);
}

const addTeacher = async (teacher) => {
    await connection.query('INSERT INTO professores (nome) VALUES (?)', teacher.nome);
}

const addSubject = async (subject) => {
    const sql = 'INSERT INTO materias (nome, total_horas, id_professor_fk) VALUES (?, ?, ?)';
    const values = [subject.nome, subject.total_horas, subject.id_professor_fk];

    await connection.query(sql, values);
}

module.exports = { addStudent, addTeacher, addSubject };