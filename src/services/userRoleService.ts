import * as UserRolesRepository from '../repositories/userRolesRepository';
import { buildLogger } from '../plugin/logger';

const logger = buildLogger('userRoleService');

export const createUserRole = async (userId: number, studentRole: number) => {
  try {
    return UserRolesRepository.assignUserRole(userId, studentRole);
  } catch (error) {
    console.log('Error creating User');
    throw Error('Error creating User');
  }
};

export const deleteUserRole = async (userId: number) => {
  try {
    logger.debug(`Attempting to delete user role with user id: ${userId}`);
    await UserRolesRepository.deleteUserRole(userId);
    logger.info('User role deleted successfully.');
  } catch (error) {
    logger.error(`Error deleting user role: ${error}`);
    throw new Error('Error deleting user role');
  }
};
