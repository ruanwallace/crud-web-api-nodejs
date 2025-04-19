const AlunoModel = require('../models/alunosModel');

const addStudent = async (req, res) => {
    try {
        const newStudent = await AlunoModel.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Erro ao adicionar um novo aluno', error);
        res.status(500).json({ error: 'Erro ao criar um novo aluno.' });
    }
}

module.exports = {
    addStudent
}