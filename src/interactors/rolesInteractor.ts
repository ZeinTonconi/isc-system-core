import Rol from '../models/rol';
import * as RolesService from '../services/rolesService';
import { getUserByRol } from '../services/userService';

export const getRoles = async (rolName: string) => {
  try {
    const roles = await RolesService.getRoles(rolName);
    return roles;
  } catch (error) {
    console.error('Error getting Roles:', error);
    throw error;
  }
};

export const createRol = async (rol: Rol) => {
  try {
    const roles = await RolesService.createRol(rol);
    return roles;
  } catch (error) {
    console.error('Error creating Rol:', error);
    throw error;
  }
};

export const editRol = async (rol: Rol, id: number) => {
  try {
    const editedRol = await RolesService.editRol(rol, id);
    return editedRol;
  } catch (error) {
    console.error('Error on edit Rol:', error);
    throw error;
  }
};

export const disableRol = async (id: number) => {
  try {
    const usersByRol = await getUserByRol(id);
    if (usersByRol.length > 0) {
      throw Error('The Role is still in use');
    }
    const disabledRol = await RolesService.disableRol(id);
    return disabledRol;
  } catch (error) {
    console.error('Error on delete Rol:', error);
    throw error;
  }
};
