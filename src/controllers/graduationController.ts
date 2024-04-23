import { Request, Response } from 'express';
import * as GraduationProcessInteractor from '../interactors/graduationInteractor';

export const getGraduationProcessByIdController = async (req: Request, res: Response) => {
  const processId = parseInt(req.params.id);

  try {
    const graduationProcess = await GraduationProcessInteractor.getGraduationProcessById(processId);
    if (!graduationProcess) {
      return res.status(404).json({ success: false, message: 'Graduation process not found' });
    }
    res.json({
      success: true,
      data: graduationProcess,
      message: 'Graduation process retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const updateGraduationProcessController = async (req: Request, res: Response) => {
  const processId = parseInt(req.params.id);
  const updatedData = req.body;

  try {
    const updatedGraduationProcess = await GraduationProcessInteractor.updateGraduationProcess(
      processId,
      updatedData
    );
    if (!updatedGraduationProcess) {
      return res.status(404).json({ success: false, message: 'Graduation process not found' });
    }
    res.json({
      success: true,
      graduationProcess: updatedGraduationProcess,
      message: 'Graduation process updated successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
