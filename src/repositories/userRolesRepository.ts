import db from './pg-connection';

const tableName = 'user_roles';

export const assignUserRole = async (userId: number, userRoleId: number) => {
  try {
    return await db(tableName).insert({
      user_id: userId,
      role_id: userRoleId,
    });
  } catch (error) {
    console.error('Error in UserRepository.assignUserRole:', error);
    throw new Error('Error assigning student role');
  }
};
