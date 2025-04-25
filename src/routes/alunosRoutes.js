const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.get('/', alunosController.getAll);
router.post('/', alunosController.addStudent);
router.get('/:id', alunosController.getAluno);
router.patch('/:id', alunosController.updateAluno);
router.delete('/:id', alunosController.deleteAluno);

module.exports = router;