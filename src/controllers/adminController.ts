import { Request, Response } from 'express';
import * as AdminInteractor from '../interactors/adminInteractor';
import createUserRequest from '../dtos/createUserRequest';

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const studentData: createUserRequest = req.body;
    const newStudent = await AdminInteractor.createAdmin(studentData);
    res
      .status(201)
      .json({ success: true, student: newStudent, message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
