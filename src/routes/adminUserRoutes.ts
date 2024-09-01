import { Router } from 'express';
import {createUserController} from '../controllers/adminUserController';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import { requireRole } from '../middlewares/checkUserRole';
import UserRole from '../constants/roles';

const router = Router();

router
  .route('/')
  .post(
    checkUserAuth,
    requireRole([UserRole.ADMIN.name]),
    createUserController
  );

export default router;
