require('dotenv').config();

const port = process.env.PORT;
const alunosController = require('./src/controllers/alunosController');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/alunos', alunosController.addStudent);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})