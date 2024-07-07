import createUserRequest from '../dtos/createUserRequest';
import Student from '../models/student';
import * as UserRepository from '../repositories/userRepository';

export const getStudents = async (): Promise<Student[]> => {
  return UserRepository.getStudents();
};

export const getStudentByCode = async (userCode: number): Promise<Student | null> => {
  return UserRepository.getStudentByCode(userCode);
};

export const getStudentById = async (studentId: number): Promise<Student | null> => {
  return UserRepository.getUserById(studentId);
};

export const updateUser = async (
  studentId: number,
  studentData: createUserRequest
): Promise<createUserRequest | null> => {
  return UserRepository.updateUser(studentId, studentData);
};
