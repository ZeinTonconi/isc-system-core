import createGraduationProcessRequest from '../dtos/createGraduationProcessRequest';
import GraduationProcess from '../models/graduationProcess';
import * as GraduationProcessRepository from '../repositories/graduationRepository';

export const getGraduationProcessById = async (processId: number): Promise<GraduationProcess> => {
  return GraduationProcessRepository.getGraduationProcessById(processId);
};

export const updateGraduationProcess = async (
  id: number,
  updatedData: Partial<GraduationProcess>
): Promise<GraduationProcess> => {
  return GraduationProcessRepository.updateGraduationProcess(id, updatedData);
};

export const createGraduationProcess = async (
  graduationProcess: createGraduationProcessRequest
) => {
  const newGraduationProcess = {
    ...graduationProcess,
    seminar_enrollment: false,
    tutor_letter: false,
    tutor_approval: false,
    reviewer_letter: false,
    reviewer_approval: false,
  };
  return GraduationProcessRepository.createGraduationProcess(newGraduationProcess);
};

export const getGraduationProcesses = async (): Promise<GraduationProcess[]> => {
  return GraduationProcessRepository.getGraduationProcesses();
};
