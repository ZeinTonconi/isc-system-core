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
