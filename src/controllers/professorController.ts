import { Request, Response } from 'express';
import * as ProfessorInteractor from '../interactors/professorInteractor';
import createUserRequest from '../dtos/createUserRequest';
import { buildLogger } from '../plugin/logger';
import { handleError } from '../handlers/errorHandler';
import { sendCreated, sendSuccess } from '../handlers/successHandler';

const logger = buildLogger('professorController');

export const getProfessorsController = async (req: Request, res: Response) => {
  try {
    const professors = await ProfessorInteractor.getProfessors();

    if (professors.length === 0) {
      logger.info('No professors found');
      return res.status(404).json({ success: false, message: 'No professors found' });
    }

    logger.info('Professors retrieved successfully');
    sendSuccess(res, professors, 'Professors retrieved successfully');
  } catch (error) {
    logger.error(`Error in getProfessorsController: ${error}`);
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const createProfessor = async (req: Request, res: Response) => {
  try {
    const studentData: createUserRequest = req.body;
    const newStudent = await ProfessorInteractor.createProfessor(studentData);
    sendCreated(res, { profesor: newStudent }, 'Professor created successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};
