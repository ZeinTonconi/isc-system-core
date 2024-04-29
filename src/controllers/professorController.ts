import { Request, Response } from 'express';
import * as ProfessorInteractor from '../interactors/professorInteractor';
import logger from '../utils/logger';
import createUserRequest from '../dtos/createUserRequest';

export const getProfessorsController = async (req: Request, res: Response) => {
  try {
    const professors = await ProfessorInteractor.getProfessors();

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

export const createProfessor = async (req: Request, res: Response) => {
  try {
    const studentData: createUserRequest = req.body;
    const newStudent = await ProfessorInteractor.createProfessor(studentData);
    res
      .status(201)
      .json({ success: true, student: newStudent, message: 'Professor created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
