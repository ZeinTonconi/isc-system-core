import Rol from '../models/rol';
import db from './pg-connection';

const rolesTable = 'roles';

export const getRoles = async () => {
  try {
    const roles = await db(rolesTable).returning('*');
    return roles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createRol = async (rolData: Rol) => {
  try {
    const newRol = await db(rolesTable).insert(rolData).returning('*');
    return newRol;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editRol = async (rolData: Rol, id: number) => {
  try {
    const editedRol = await db(rolesTable).where('id', id).update(rolData).returning('*');
    return editedRol;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const disableRol = async (id: number) => {
  try {
    const editedRol = await db(rolesTable).where('id', id).update('disabled', true).returning('*');
    return editedRol;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
