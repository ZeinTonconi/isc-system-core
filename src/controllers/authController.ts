import { Request, Response } from 'express';
import * as LoginInteractor from '../interactors/loginInteractor';
import { sendSuccess } from '../handlers/successHandler';
import { handleError } from '../handlers/errorHandler';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await LoginInteractor.login(email, password);
    sendSuccess(res, result, 'Successfully logged in');
  } catch (error) {
    if (error instanceof Error) {
      handleError(res, error);
    }
  }
};

export default login;
