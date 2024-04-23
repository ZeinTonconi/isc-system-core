import Student from '../models/student';
import * as UserRepository from '../repositories/userRepository';

export const getStudents = async (): Promise<Student[]> => {
  return UserRepository.getStudents();
};
