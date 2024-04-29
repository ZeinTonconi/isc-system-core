import express from 'express';
import * as ProfessorController from '../controllers/professorController';

const router = express.Router();

router.get('/', ProfessorController.getProfessorsController);
router.post('/', ProfessorController.createProfessor);

export default router;
