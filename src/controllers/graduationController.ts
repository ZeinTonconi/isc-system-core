import { Request, Response } from 'express';
import * as GraduationProcessInteractor from '../interactors/graduationInteractor';
import createGraduationProcessRequest from '../dtos/createGraduationProcessRequest';

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

export const createGraduationProcessController = async (req: Request, res: Response) => {
  const graduationProcess: createGraduationProcessRequest = req.body;

  try {
    const newGraduationProcess =
      await GraduationProcessInteractor.createGraduationProcess(graduationProcess);
    res.status(201).json({
      success: true,
      data: newGraduationProcess,
      message: 'Graduation process created successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error || 'Internal server error' });
  }
};

export const getGraduationProcessesController = async (req: Request, res: Response) => {
  try {
    const graduationProcesses = await GraduationProcessInteractor.getGraduationProcesses();
    if (graduationProcesses.length === 0) {
      return res.status(404).json({ success: false, message: 'No graduation processes found' });
    }
    res.json({
      success: true,
      data: graduationProcesses,
      message: 'Graduation processes retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
