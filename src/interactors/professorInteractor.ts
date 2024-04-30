import User from '../models/userInterface';
import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import { buildLogger } from '../plugin/logger';

const logger = buildLogger('professorInteractor');

const professorRole = 2;

export const getProfessors = async () => {
  try {
    logger.debug('Fetching professors');
    const professors = await UserService.getProfessors();

    if (professors.length === 0) {
      logger.info('No professors found');
      return 'There are no professors';
    }

    logger.info('Professors fetched successfully');
    return professors;
  } catch (error) {
    logger.error(`Error fetching professors: ${error}`);
    throw new Error('Error fetching professors');
  }
};

export const createProfessor = async (professorData: User) => {
  try {
    const newProfessor = await UserService.createUser(professorData);

    if (!newProfessor) {
      throw new Error('Error creating the professor');
    }

    const { id } = newProfessor;
    const userRole = await UserRoleService.createUserRole(id, professorRole);
    if (!userRole) {
      throw new Error('Error creating the Professor Role');
    }
    return newProfessor;
  } catch (error) {
    console.error('Error in createProfessor interactor:', error);
    throw new Error('Error creating the professor');
  }
};
