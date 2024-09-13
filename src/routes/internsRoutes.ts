import { Router } from "express";
import { getInternsController, updateHoursController, getInternsById,getRecordInternsController, getInformationsInternController, getMyEventsInternController } from "../controllers/internController";
import { checkUserAuth } from "../middlewares/checkUserAuth";

const router = Router();

router.route('/:intern_id/update-hours').put(checkUserAuth, updateHoursController);
router.route('/:intern_id').get(checkUserAuth, getInternsById);
router.route('/:intern_id/historial-eventos').get(checkUserAuth, getRecordInternsController);
router.route('/:intern_id/my-events').get(checkUserAuth, getMyEventsInternController);
router.route('/:intern_id/informacion').get(checkUserAuth, getInformationsInternController);
router.route('/').get(checkUserAuth, getInternsController);

export default router;