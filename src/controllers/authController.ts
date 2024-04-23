import { Request, Response } from 'express';
import * as LoginInteractor from '../interactors/loginInteractor';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await LoginInteractor.login(email, password);
    res.json({
      success: true,
      data: result,
      message: 'Successfully login admin',
      error: null,
      code: 200,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: null,
      message: 'Unexpected error in login',
      error: err,
      code: 500,
    });
  }
};

export default login;
