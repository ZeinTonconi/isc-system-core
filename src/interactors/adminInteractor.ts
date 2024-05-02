import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import createUserRequest from '../dtos/createUserRequest';

const adminRole = 3;

export const createStudent = async (studentData: createUserRequest) => {
  try {
    const newStudent = await UserService.createUser(studentData);

    if (!newStudent) {
      throw new Error('Error creating the admin');
    }

    const { id } = newStudent;
    const userRole = await UserRoleService.createUserRole(id, adminRole);
    if (!userRole) {
      throw new Error('Error creating the admin Role');
    }
    return newStudent;
  } catch (error) {
    console.error('Error in createAdmin interactor:', error);
    throw new Error('Error creating the admin');
  }
};
