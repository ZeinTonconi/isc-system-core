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
