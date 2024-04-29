import { Router } from 'express';
import * as AdminController from '../controllers/adminController';

const router = Router();

router.route('/').post(AdminController.createAdmin);

export default router;
