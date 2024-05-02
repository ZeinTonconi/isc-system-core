import { Request, Response } from 'express';
import * as StudentInteractor from '../interactors/studentInteractor';
import createUserRequest from '../dtos/createUserRequest';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentInteractor.getStudents();
    if (students.length === 0) {
      res.status(404).json({ success: false, message: 'No students found' });
    } else {
      res.json({ success: true, data: students, message: 'Students retrieved successfully' });
    }
  } catch (err) {
    res.status(500).json({ success: false, result: null, message: err });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData: createUserRequest = req.body;
    const newStudent = await StudentInteractor.createStudent(studentData);
    res
      .status(201)
      .json({ success: true, student: newStudent, message: 'Student created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
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
    res.json({ success: true, data: student, message: 'Student retrieved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
