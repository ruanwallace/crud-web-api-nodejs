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

const getAll = async (req, res) => {
    try {
        const alunos = await AlunoModel.getAll();
        res.status(200).json(alunos);
    } catch (error) {
        console.error('Erro ao tentar consultar a tabela alunos', error);
        res.status(500).json({ error: 'Erro ao consultar a tabela alunos' });
    }
}

const getAluno = async (req, res) => {
    try {
        const aluno = await AlunoModel.getAluno(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        console.error('Erro ao consultar um aluno específico', error);
        res.status(500).json({ error: 'Erro ao consultar o aluno' })
    }
}

const updateAluno = async (req, res) => {
    try {
        const aluno = await AlunoModel.updateAluno(req.body, req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        console.error('Erro em atualizar o aluno.', error);
        res.status(500).json({ erro: 'Erro ao atualizar o aluno' });
    }
}

const deleteAluno = async (req, res) => {
    try {
        const aluno = await AlunoModel.deleteAluno(req.params.id);
        res.status(200).json(aluno);
    } catch (error) {
        console.error('Erro ao deletar o aluno', error);
        res.status(500).json({ error: 'Erro ao deletar o aluno' });
    }
}

module.exports = {
    addStudent,
    getAll,
    getAluno,
    updateAluno,
    deleteAluno
}