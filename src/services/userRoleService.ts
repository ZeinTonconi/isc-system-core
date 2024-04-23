import * as UserRolesRepository from '../repositories/userRolesRepository';

const studentRole = 4;
export const createUserStudent = async (userId: number) => {
  try {
    return UserRolesRepository.assignStudentRole(userId, studentRole);
  } catch (error) {
    console.log('Error creating User');
    throw Error('Error creating User');
  }
};
