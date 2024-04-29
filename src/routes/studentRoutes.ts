import { Router } from 'express';
import * as StudentController from '../controllers/studentController';

const router = Router();

router.route('/').get(StudentController.getStudents);
router.route('/').post(StudentController.createStudent);

export default router;
