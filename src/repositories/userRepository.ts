import UserRole from '../constants/roles';
import User from '../models/userInterface';
import { buildLogger } from '../plugin/logger';
import db from './pg-connection';

const logger = buildLogger('userRepository');

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db('users').where({ email }).first();
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const students = await db('graduation_process as gp')
      .select(
        'u.name as student_name',
        'm.name as modality',
        'tutor.name as tutor_name',
        'reviewer.name as reviewer_name',
        'gp.period as period',
        'gp.id'
      )
      .join('users as u', 'u.id', '=', 'gp.student_id')
      .join('modalities as m', 'm.id', '=', 'gp.modality_id')
      .join('users as tutor', 'tutor.id', '=', 'gp.tutor_id')
      .join('users as reviewer', 'reviewer.id', '=', 'gp.reviewer_id');
    console.log('🚀 ~ file: userRepository.ts:16 ~ getStudents ~ students:', students);
    return students;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUser = async (userData: User) => {
  try {
    const [newUserId] = await db('users').insert(userData).returning('id');
    const newUser = await db('students').where({ id: newUserId }).first();
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProfessors = async () => {
  try {
    logger.debug('Fetching professors');
    const professors = await db('users as u')
      .select('u.id', 'u.name as name', 'u.lastname as lastName', 'u.mothername as motherName')
      .join('user_roles as ur', 'u.id', '=', 'ur.user_id')
      .where('ur.role_id', UserRole.PROFESSOR);
    logger.info('Professors fetched successfully.');
    logger.debug(`Fetched professors: ${JSON.stringify(professors)}`);
    return professors;
  } catch (error) {
    logger.error(`Error fetching professors: ${error}`);
    throw Error('Error');
  }
};
