import { Router } from 'express';
import { checkUserAuth } from '../middlewares/checkUserAuth';
import * as RolesController from '../controllers/rolesController';
import { validateBody } from '../middlewares/validateBodyMiddleware';
import RolesByNameSchema from '../middlewares/schemas/searchRolesByNameSchema';
import CreateRolSchema from '../middlewares/schemas/createRolSchema';
import EditRolSchema from '../middlewares/schemas/editRolSchema';
const router = Router();

router.route('/').get(checkUserAuth, validateBody(RolesByNameSchema), RolesController.getRoles);
router.route('/').post(checkUserAuth, validateBody(CreateRolSchema), RolesController.createRol);
router.route('/:id').put(checkUserAuth, validateBody(EditRolSchema), RolesController.editRol);
router.route('/:id').delete(checkUserAuth); //False Delete rol

export default router;
