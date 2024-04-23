import * as ModalityService from '../services/modalityService';
import logger from '../utils/logger';

export const getModalities = async () => {
  try {
    logger.debug('Fetching modalities');
    const modalities = await ModalityService.getGraduationProcessById();

    if (modalities.length === 0) {
      logger.info('No professors found');
      return 'There are no modalities';
    }
    logger.info('Modalities fetched successfully');
    return modalities;
  } catch (error) {
    logger.error(`Error fetching modalities: ${error}`);
    throw new Error('Error fetching modalities');
  }
};
