const connection = require('../config/db');
const attributes = ['nome', 'idade', 'email'];

const create = async (aluno) => {
    const placeholders = attributes.map(() => '?'). join(', ');
    const sql = `INSERT INTO alunos (${attributes.join(', ')}) VALUES (${placeholders})`;
    const values = attributes.map(attr => aluno[attr]);

    try {
        const [result] = await connection.query(sql, values);
        return { 
            id: result.insertId,
            ...aluno
        }
    } catch (error) {
        throw error;
    }
}

const getAll = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM alunos');
        return rows;
    } catch (error) {
        throw error;
    }
}

const getAluno = async (id_aluno) => {
    try {
        const [rows] = await connection.query('SELECT * FROM alunos WHERE id_aluno = ?', [id_aluno]);
        return rows;
    } catch (error) {
        throw error;
    }
}

const updateAluno = async (aluno, id_aluno) => {
    const values = attributes.map(attr => `${attr} = ?`).join(', ');
    const sql = `UPDATE alunos SET ${values} WHERE id_aluno = ?`;
    const params = [...attributes.map(attr => aluno[attr]), id_aluno];

    try {
        const [result] = await connection.query(sql, params);
        return getAluno(id_aluno);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getAluno,
    updateAluno
}