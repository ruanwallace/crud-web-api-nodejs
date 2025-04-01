require('dotenv').config();

const express = require('express');
const port = process.env.PORT;
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/alunos', async (req, res) => {
    const result = await db.getStudents();
    res.json(result);
})

app.get('/alunos/:id', async (req, res) => {
    const result = await db.consultStudent(req.params.id);
    res.json(result);
})

app.get('/professores/:id', async (req, res) => {
    const result = await db.consultTeacher(req.params.id);
    res.json(result);
})

app.get('/materias/:id', async (req, res) => {
    const result = await db.consultSubject(req.params.id);
    res.json(result);
})

app.get('/matriculas/:id', async (req, res) => {
    const result = await db.consultRegistration(req.params.id);
    res.json(result);
})

app.get('/materias', async (req, res) => {
    const result = await db.getSubjects();
    res.json(result);
})

app.get('/professores', async (req, res) => {
    const result = await db.getTeachers();
    res.json(result);
})

app.get('/matriculas', async (req, res) => {
    const result = await db.getRegistration();
    res.json(result);
})

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

app.post('/matriculas', async (req, res) => {
    await db.addRegistration(req.body);
    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
})