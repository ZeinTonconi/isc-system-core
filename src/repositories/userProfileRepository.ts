import { userProfileInterface } from '../models/userProfile';
import { buildLogger } from '../plugin/logger';
import db from './pg-connection';

const logger = buildLogger('professorRepository');

const TABLE_NAME = 'user_profile';

export const createUserProfile = async (userProfile: userProfileInterface) => {
  try {
    const [newUserProfile] = await db(TABLE_NAME).insert(userProfile).returning('*');
    return newUserProfile;
  } catch (error) {
    const err = error as Error;
    logger.error(`Error creating user profile: ${err.message}`, { err, userProfile });
    throw error;
  }
};
