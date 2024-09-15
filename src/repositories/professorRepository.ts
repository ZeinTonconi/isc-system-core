import { buildLogger } from '../plugin/logger';
import db from './pg-connection';

const logger = buildLogger('professorRepository');

const TABLE_NAME = 'professors';
interface professorInterface {
  id: string;
  degree: string;
  department: string;
  specialty: string;
}
export const storeProfessor = async (professor: professorInterface) => {
  try {
    const newProfessor = await db(TABLE_NAME).insert(professor).returning('*');
    if (!newProfessor) {
      logger.debug('Professor have not created');
    }
    return newProfessor;
  } catch (error) {
    logger.error(`Error creating professor: ${error}`);
    throw error;
  }
};
