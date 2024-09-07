import { Router } from 'express';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import * as RolesController from '../controllers/rolesController';
import { validateBody } from '../middlewares/validateBodyMiddleware';
import RolesByNameSchema from '../middlewares/schemas/searchRolesByNameSchema';
import baseRolSchema from '../middlewares/schemas/BaseRolSchema';
const router = Router();

router.route('/').get(checkUserAuth, validateBody(RolesByNameSchema), RolesController.getRoles);
router.route('/').post(checkUserAuth, validateBody(baseRolSchema), RolesController.createRol);
router.route('/:id').put(checkUserAuth, validateBody(baseRolSchema), RolesController.editRol);
router.route('/:id').delete(checkUserAuth, RolesController.disableRol);

export default router;
