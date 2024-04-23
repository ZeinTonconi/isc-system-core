import Modality from '../models/modality';
import * as ModalityRepository from '../repositories/modalityRepository';

export const getGraduationProcessById = async (): Promise<Modality[]> => {
  return ModalityRepository.getModalities();
};
