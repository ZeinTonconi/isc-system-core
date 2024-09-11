import createProfessorRequest from '../dtos/createProfessorRequest';
import * as userProfileRepository from '../repositories/userProfileRepository';
import { buildLogger } from '../plugin/logger';

const logger = buildLogger('userProfileService');

export const createUserProfile = async (createUserProfileRequest: createProfessorRequest) => {
  try {
    logger.info('Creating user profile with data:', { createUserProfileRequest });
    const userProfile = {
      name: createUserProfileRequest.name,
      lastname: createUserProfileRequest.lastname,
      username: createUserProfileRequest.lastname + createUserProfileRequest.name,
      email: createUserProfileRequest.email,
      password: 'createpassworddefect',
      mothername: createUserProfileRequest.mothername,
      phone: createUserProfileRequest.phone,
    };
    const newUserProfile = await userProfileRepository.createUserProfile(userProfile);
    return newUserProfile;
  } catch (error) {
    console.error('Error in createUserProfileService:', error);
    return null;
  }
};
