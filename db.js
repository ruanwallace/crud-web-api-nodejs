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

const addRegistration = async (registration) => {
    const sql = 'INSERT INTO matriculas(data_matricula, id_aluno_fk, id_materia_fk) VALUES (?, ?, ?)';
    const values = [registration.data_matricula, registration.id_aluno_fk, registration.id_materia_fk];
    await connection.query(sql, values);
}

const getStudents = async () => {
    const res = await connection.query('SELECT * FROM alunos');
    return res[0]
}

const getSubjects = async () => {
    const res = await connection.query('SELECT * FROM materias');
    return res[0];
}

const getTeachers = async () => {
    const res = await connection.query('SELECT * FROM professores');
    return res[0];
}

const getRegistration = async () => {
    const res = await connection.query('SELECT * FROM matriculas');
    return res[0];
}

const consultStudent = async (id_student) => {
    const res = await connection.query('SELECT * FROM alunos WHERE id_aluno=?', [id_student]);
    return res[0];
}

module.exports = { addStudent, addTeacher, addSubject, addRegistration, getStudents, getSubjects, getTeachers, getRegistration, consultStudent };
