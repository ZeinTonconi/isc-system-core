import { Request, Response } from 'express';
import * as StudentInteractor from '../interactors/studentInteractor';

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
    const studentData = req.body;
    const newStudent = await StudentInteractor.createStudent(studentData);
    res
      .status(201)
      .json({ success: true, student: newStudent, message: 'Student created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
