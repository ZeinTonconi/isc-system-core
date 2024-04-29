import * as UserService from '../services/userService';
import { buildLogger } from '../plugin/logger';

const logger = buildLogger('professorInteractor');

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
