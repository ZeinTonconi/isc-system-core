import { Router } from 'express';
import * as GraduationController from '../controllers/graduationController';

const router = Router();

router.route('/:id').get(GraduationController.getGraduationProcessByIdController);
router.route('/:id').put(GraduationController.updateGraduationProcessController);

export default router;
