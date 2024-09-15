import { buildLogger } from '../plugin/logger';
import db from './pg-connection';

const logger = buildLogger('studentRepository');

const TABLE_NAME = 'students';
interface studentInterface {
  id: string;
  is_scholarship:boolean;
}
export const storeStudent = async (student: studentInterface) => {
  try {
    const newStudent = await db(TABLE_NAME).insert(student).returning('*');
    if (!newStudent) {
      logger.debug('Student have not created');
    }
    return newStudent;
  } catch (error) {
    logger.error(`Error creating student: ${error}`);
    throw error;
  }
};
