import Rol from '../models/rol';
import * as RolesService from '../services/rolesService';

export const getRoles = async (rolName: string) => {
  try {
    const roles = await RolesService.getRoles(rolName);
    return roles;
  } catch (error) {
    console.error('Error getting Roles:', error);
    throw new Error('Error getting Roles');
  }
};

export const createRol = async (rol: Rol) => {
  try {
    const roles = await RolesService.createRol(rol);
    return roles;
  } catch (error) {
    console.error('Error creating Rol:', error);
    throw new Error('Error creating Rol');
  }
};

export const editRol = async (rol: Rol, id: number) => {
  try {
    const editedRol = await RolesService.editRol(rol, id);
    return editedRol;
  } catch (error) {
    console.error('Error on edit Rol:', error);
    throw new Error('Error on edit Rol');
  }
};
