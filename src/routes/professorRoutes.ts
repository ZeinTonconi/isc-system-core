import express from 'express';
import * as ProfessorController from '../controllers/professorController';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import { validateBody } from '../middlewares/validateBodyMiddleware';
import { createProfessorSchema } from '../middlewares/schemas/createUserSchema';

const router = express.Router();

router.get('/', checkUserAuth, ProfessorController.getProfessorsController);
router.post(
  '/',
  checkUserAuth,
  validateBody(createProfessorSchema),
  ProfessorController.createProfessor
);

export default router;
