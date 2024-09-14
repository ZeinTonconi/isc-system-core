import { Router } from 'express';
import {
  getEventsController,
  getEventsByIdController,
  createEventController,
  updateEventController,
  deleteEventController,
} from '../controllers/eventsController';
import { checkUserAuth } from '../middlewares/checkUserAuth';

const router = Router();

router.route('/').get(checkUserAuth, getEventsController);
router.route('/:id').get(checkUserAuth, getEventsByIdController);
router.route('/').post(checkUserAuth, createEventController);
router.route('/:id').put(checkUserAuth, updateEventController);
router.route('/:id').delete(checkUserAuth, deleteEventController);

export default router;
