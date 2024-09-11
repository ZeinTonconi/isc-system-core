import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import { buildLogger } from '../plugin/logger';
import createUserRequest from '../dtos/createUserRequest';
import { NotFoundError } from '../errors/notFoundError';
import createProfessorRequest from '../dtos/createProfessorRequest';
import { createProfessorService } from '../services/professorService';
import * as userProfileService from '../services/userProfileService';
const logger = buildLogger('professorInteractor');

const professorRole = 2;

export const getProfessors = async () => {
  logger.debug('Fetching professors');
  const professors = await UserService.getProfessors();

  if (!professors) {
    logger.info('No professors found');
    throw new NotFoundError('There are no professors');
  }

  logger.info('Professors fetched successfully');
  return professors;
};

export const createProfessor = async (professorData: createProfessorRequest) => {
  try {
    logger.info('Creating professor with data:', { professorData });
    const newUserProfile = await userProfileService.createUserProfile(professorData);
    const { id } = newUserProfile;
    professorData.id = id;
    const newProfessor = await createProfessorService(professorData);
    return newProfessor;
  } catch (error) {
    console.error('Error in createProfessor interactor:', error);
    throw new Error('Error creating the professor');
  }
};
