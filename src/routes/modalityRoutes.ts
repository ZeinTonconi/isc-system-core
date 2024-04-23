import { Router } from 'express';
import * as ModalityController from '../controllers/modalityController';

const router = Router();

router.route('/').get(ModalityController.getModalitiesController);

export default router;
