const connection = require('../config/db');
const attributes = ['nome', 'idade', 'email'];

const create = async (aluno) => {
    const placeholders = attributes.map(() => '?'). join(', ');
    const sql = `INSERT INTO alunos (${attributes.join(', ')}) VALUES (${placeholders})`;
    const values = attributes.map(attr => aluno[attr]);

    try {
        const [result] = await connection.query(sql, values);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create
}