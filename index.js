require('dotenv').config();

const express = require('express');
const port = process.env.PORT;
const db = require('./db');

const app = express();

app.use(express.json());

app.post('/alunos', async (req, res) => {
    await db.addStudent(req.body);
    res.sendStatus(201);
})

app.post('/professores', async (req, res) => {
    await db.addTeacher(req.body);
    res.sendStatus(201);
})

app.post('/materias', async (req, res) => {
    await db.addSubject(req.body);
    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
})