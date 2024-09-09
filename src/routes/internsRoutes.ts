import { Router } from "express";
import { updateHoursController, getInternsById,getRecordInternsController, getInformationsInternController } from "../controllers/internController";

const router = Router();

router.route('/:intern_id/update-hours').put(updateHoursController);
router.route('/:intern_id').get(getInternsById);
router.route('/:intern_id/historial-eventos').get(getRecordInternsController);
router.route('/:intern_id/informacion').get(getInformationsInternController)

export default router;