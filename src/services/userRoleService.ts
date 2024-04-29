import * as UserRolesRepository from '../repositories/userRolesRepository';

export const createUserRole = async (userId: number, studentRole: number) => {
  try {
    return UserRolesRepository.assignUserRole(userId, studentRole);
  } catch (error) {
    console.log('Error creating User');
    throw Error('Error creating User');
  }
};
