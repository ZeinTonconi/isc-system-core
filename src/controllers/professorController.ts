import { Request, Response } from 'express';
import * as ProfessorService from '../interactors/professorInteractor';
import { buildLogger } from '../plugin/logger';

const logger = buildLogger('professorController');

export const getProfessorsController = async (req: Request, res: Response) => {
  try {
    const professors = await ProfessorService.getProfessors();

    if (professors.length === 0) {
      logger.info('No professors found');
      return res.status(404).json({ success: false, message: 'No professors found' });
    }

    logger.info('Professors retrieved successfully');
    res.json({ success: true, data: professors, message: 'Professors retrieved successfully' });
  } catch (error) {
    logger.error(`Error in getProfessorsController: ${error}`);
    res.status(500).json({ success: false, message: 'Error fetching professors' });
  }
};
