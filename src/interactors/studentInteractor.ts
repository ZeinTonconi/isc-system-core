import * as StudentService from '../services/studentService';
import * as UserService from '../services/userService';
import * as UserRoleService from '../services/userRoleService';
import createUserRequest from '../dtos/createUserRequest';
import { NotFoundError } from '../errors/notFoundError';

const studentRole = 1;

export const getStudents = async () => {
  const students = await StudentService.getStudents();

  if (!students) {
    throw new NotFoundError('There are no students');
  }

  return students;
};

export const getStudentByCode = async (studentCode: number) => {
  const student = await StudentService.getStudentByCode(studentCode);

  if (!student) {
    throw new NotFoundError('There is not student with the provide code');
  }
  return student;
};

export const createStudent = async (studentData: createUserRequest) => {
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

export const deleteStudent = async (studentId: number) => {
  try {
    const student = await StudentService.getStudentById(studentId);

    if (!student) {
      throw new NotFoundError('Student not found');
    }

    await UserService.deleteUser(studentId);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw new Error('Error deleting student');
  }
};
