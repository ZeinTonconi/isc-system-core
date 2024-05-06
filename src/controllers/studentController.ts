import { Request, Response } from 'express';
import * as StudentInteractor from '../interactors/studentInteractor';
import createUserRequest from '../dtos/createUserRequest';
import { handleError } from '../handlers/errorHandler';
import { sendCreated, sendSuccess } from '../handlers/successHandler';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentInteractor.getStudents();
    if (students.length === 0) {
      res.status(404).json({ success: false, message: 'No students found' });
    }
    sendSuccess(res, students, 'Students retrieved successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData: createUserRequest = req.body;
    const newStudent = await StudentInteractor.createStudent(studentData);
    sendCreated(res, newStudent, 'Student created successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export const getStudentByCode = async (req: Request, res: Response) => {
  const userCode = parseInt(req.params.code);

  try {
    const student = await StudentInteractor.getStudentByCode(userCode);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: 'No student found with the provided code' });
    }
    sendSuccess(res, student, 'Student retrieved successfully');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};
