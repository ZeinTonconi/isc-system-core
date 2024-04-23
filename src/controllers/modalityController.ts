import { Request, Response } from 'express';
import * as ModalityInteractor from '../interactors/modalityInteractor';

export const getModalitiesController = async (req: Request, res: Response) => {
  try {
    const modalities = await ModalityInteractor.getModalities();
    if (!modalities) {
      return res.status(404).json({ success: false, message: 'Modalities not found' });
    }
    res.json({ success: true, data: modalities, message: 'Modalities retrieved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
