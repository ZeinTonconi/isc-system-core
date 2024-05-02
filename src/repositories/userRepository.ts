import UserRole from '../constants/roles';
import User from '../models/userInterface';
import { buildLogger } from '../plugin/logger';
import db from './pg-connection';

const logger = buildLogger('userRepository');

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db('users as u')
      .leftJoin('user_roles as ur', 'ur.user_id', 'u.id')
      .leftJoin('roles as r', 'r.id', 'ur.role_id')
      .where('u.email', email)
      .first('u.*', db.raw('array_agg(r.name) as roles'))
      .groupBy('u.id');

    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const students = await db('users as u')
      .select('u.id', 'u.name as name', 'u.lastname as lastName', 'u.mothername as motherName')
      .join('user_roles as ur', 'u.id', '=', 'ur.user_id')
      .where('ur.role_id', UserRole.STUDENT.id);
    return students;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStudentByCode = async (userCode: number) => {
  try {
    const student = await db('users as u')
      .select(
        'u.id',
        'u.name as student_name',
        'u.lastname as lastName',
        'u.mothername as motherName',
        'u.code'
      )
      .join('user_roles as ur', 'u.id', '=', 'ur.user_id')
      .where('ur.role_id', UserRole.STUDENT.id)
      .andWhere('u.code', userCode)
      .first();

    return student || null;
  } catch (error) {
    console.error('Error in getStudentByCode:', error);
    throw new Error('Error fetching student by code');
  }
};

export const createUser = async (userData: User) => {
  try {
    const [newUser] = await db('users').insert(userData).returning('id');
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
      .where('ur.role_id', UserRole.PROFESSOR.id);
    logger.info('Professors fetched successfully.');
    logger.debug(`Fetched professors: ${JSON.stringify(professors)}`);
    return professors;
  } catch (error) {
    logger.error(`Error fetching professors: ${error}`);
    throw Error('Error');
  }
};
