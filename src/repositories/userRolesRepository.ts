import db from './pg-connection';

const tableName = 'user_roles';

export const assignStudentRole = async (userId: number, studentRoleId: number) => {
  try {
    return await db(tableName).insert({
      user_id: userId,
      role_id: studentRoleId,
    });
  } catch (error) {
    console.error('Error in UserRepository.assignStudentRole:', error);
    throw new Error('Error assigning student role');
  }
};
