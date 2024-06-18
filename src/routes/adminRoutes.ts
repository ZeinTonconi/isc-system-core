import { Router } from 'express';
import * as AdminController from '../controllers/adminController';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import { requireRole } from '../middlewares/checkUserRole';
import UserRole from '../constants/roles';
import { validateBody } from '../middlewares/validateBodyMiddleware';
import { createAdminSchema } from '../middlewares/schemas/createUserSchema';

const router = Router();

router
  .route('/')
  .post(
    checkUserAuth,
    requireRole([UserRole.ADMIN.name]),
    validateBody(createAdminSchema),
    AdminController.createAdmin
  );

export default router;
