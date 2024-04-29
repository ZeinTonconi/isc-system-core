import { Request, Response } from 'express';
import * as LoginInteractor from '../interactors/loginInteractor';
import { AuthenticationError } from '../errors/authenticationError';

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
    if (err instanceof AuthenticationError) {
      res.status(401).json({
        success: false,
        data: null,
        message: err.message,
        error: err,
        code: 401,
      });
    } else {
      res.status(500).json({
        success: false,
        data: null,
        message: 'An error occurred during login. Please try again later.',
        error: err,
        code: 500,
      });
    }
  }
};

export default login;
