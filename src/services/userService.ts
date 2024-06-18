import User from '../models/userInterface';
import * as UserRepository from '../repositories/userRepository';
import * as AuthenticationService from './authenticationService';
import { buildLogger } from '../plugin/logger';
import config from '../config/config';
import createUserRequest from '../dtos/createUserRequest';

const logger = buildLogger('userService');
const defaultUserPassword = config.defaultUserPassword;

export const findByEmail = async (email: string): Promise<User> => {
  return UserRepository.getUserByEmail(email);
};

export const createUser = async (user: createUserRequest) => {
  try {
    // TODO: valid the user does not exist with the email or code
    logger.debug('Attempting to create a new User');
    const hashedPassword = await AuthenticationService.hashPassword(defaultUserPassword);
    return await UserRepository.createUser({
      ...user,
      password: hashedPassword,
      username: user.code + user.name + user.lastname,
    });
  } catch (error) {
    console.log('Error creating User');
    throw Error('Error creating User');
  }
};

export const getProfessors = async () => {
  try {
    logger.debug('Attempting to fetch professors');
    const professors = await UserRepository.getProfessors();
    logger.info('Professors fetched successfully.');
    return professors;
  } catch (error) {
    logger.error(`Error fetching professors: ${error}`);
    throw new Error('Error occurred while fetching professors');
  }
};

export const deleteUser = async (userId: number) => {
  try {
    logger.debug(`Attempting to delete user with id: ${userId}`);
    await UserRepository.deleteUser(userId);
    logger.info('User deleted successfully.');
  } catch (error) {
    logger.error(`Error deleting user: ${error}`);
    throw new Error('Error deleting user');
  }
};
