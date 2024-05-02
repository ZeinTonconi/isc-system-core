import * as StudentService from '../services/studentService';
import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import User from '../models/userInterface';

const studentRole = 1;

export const getStudents = async () => {
  try {
    const students = await StudentService.getStudents();

    if (students.length === 0) {
      return 'There are no students';
    }

    return students;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw new Error('Error fetching students');
  }
};

export const getStudentByCode = async (studentCode: number) => {
  try {
    return await StudentService.getStudentByCode(studentCode);
  } catch (error) {
    console.error('Error fetching students:', error);
    throw new Error('Error fetching students');
  }
};

export const createStudent = async (studentData: User) => {
  try {
    const newStudent = await UserService.createUser(studentData);

    if (!newStudent) {
      throw new Error('Error creating the student');
    }

    const { id } = newStudent;
    const userRole = await UserRoleService.createUserRole(id, studentRole);
    if (!userRole) {
      throw new Error('Error creating the student Role');
    }
    return newStudent;
  } catch (error) {
    console.error('Error in createStudent interactor:', error);
    throw new Error('Error creating the student');
  }
};
