import createUserRequest from '../dtos/createUserRequest';
import Student from '../models/studentInterface';
import * as UserRepository from '../repositories/userRepository';
import * as UserProfileRepository from '../repositories/userProfileRepository'

export const getStudents = async (): Promise<Student[]> => {
  return UserRepository.getStudents();
};

export const getStudentByCode = async (userCode: number): Promise<Student | null> => {
  return UserRepository.getStudentByCode(userCode);
};

export const getStudentByEmail = async (email: string): Promise<Student | null> => {
  return UserRepository.getUserByEmail(email);
}

export const getStudentById = async (studentId: number): Promise<Student | null> => {
  return UserProfileRepository.getUserById(studentId);
};

export const updateUser = async (
  studentId: number,
  studentData: createUserRequest
): Promise<createUserRequest | null> => {
  return UserRepository.updateUser(studentId, studentData);
};

import createStudentRequest from '../dtos/createStudentRequest';
import * as StudentRepository from '../repositories/studentRepository'
export const createStudent = async (student: createStudentRequest): Promise<any | null> => {
  try {
    const studentRequest = {
      id: student.id,
      is_scholarship: student.is_scholarship
    };
    const newStudent = await StudentRepository.storeStudent(studentRequest);
    return newStudent;
  } catch (error) {
    console.error('Error in createStudent interactor:', error);
    return null;
  }
};
