import { Request, Response } from "express";
import { handleError } from "../handlers/errorHandler";
import genericUser from "../models/genericUser"
import { sendCreated } from "../handlers/successHandler";
import { createUserInteractor } from "../interactors/adminUserInteractor";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const UserData: genericUser = req.body;
        const newUser = await createUserInteractor(UserData);
        sendCreated(res, { user: newUser }, 'User created successfully');
      } catch (error) {
        if (error instanceof Error) {
          handleError(res, error);
        }
      }
}