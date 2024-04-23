import express from 'express';
import { getProfessorsController } from '../controllers/professorController';

const router = express.Router();

router.get('/', getProfessorsController);

export default router;
