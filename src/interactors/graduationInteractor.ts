import createGraduationProcessRequest from '../dtos/createGraduationProcessRequest';
import GraduationProcess from '../models/graduationProcess';
import * as GraduationProcessService from '../services/graduationService';

export const getGraduationProcessById = async (processId: number) => {
  try {
    const process = await GraduationProcessService.getGraduationProcessById(processId);

    if (!process) {
      return 'There is no process';
    }

    return process;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw new Error('Error fetching students');
  }
};

export const updateGraduationProcess = async (
  processId: number,
  updatedData: GraduationProcess
) => {
  try {
    const updatedGraduationProcess = await GraduationProcessService.updateGraduationProcess(
      processId,
      updatedData
    );
    return updatedGraduationProcess;
  } catch (error) {
    console.error('Error in GraduationProcessService.updateGraduationProcess:', error);
    throw new Error('Error updating Graduation Process');
  }
};

export const createGraduationProcess = async (
  graduationProcess: createGraduationProcessRequest
) => {
  try {
    return await GraduationProcessService.createGraduationProcess(graduationProcess);
  } catch (error) {
    console.error('Error in GraduationProcessService.createGraduationProcess:', error);
    throw new Error('Error creating Graduation Process');
  }
};
