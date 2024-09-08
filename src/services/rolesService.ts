import Rol from '../models/rol';
import RolComplete from '../models/rolDisabled';
import * as RolesRepository from '../repositories/rolesRepository';

export const getRoles = async (rolName: string) => {
  try {
    const roles = await RolesRepository.getRoles();
    if (rolName && rolName.length > 0) {
      const rolesByName = roles.filter((rol: RolComplete) => {
        return rol.name.startsWith(rolName) && !rol.disabled;
      });
      return rolesByName;
    }
    const filteredRoles = roles.filter((rol: RolComplete) => {
      return !rol.disabled;
    });
    return filteredRoles;
  } catch (error) {
    console.error('Error fetching Roles:', error);
    throw new Error('Error fetching Roles');
  }
};

export const createRol = async (rol: Rol) => {
  try {
    const similarRoles = await getRoles(rol.name);
    const equalRoles = similarRoles.filter((rolComparer: Rol) => {
      return rol.name == rolComparer.name;
    });
    if (equalRoles.length > 0) {
      throw Error('there is another Rol with the same name');
    }
    const [newRol] = await RolesRepository.createRol(rol);
    return newRol;
  } catch (error) {
    console.error('Error creating Rol:', error);
    throw new Error('Error creating Rol');
  }
};

export const editRol = async (rol: Rol, id: number) => {
  try {
    const similarRoles = await getRoles(rol.name);
    const equalRoles = similarRoles.filter((rolComparer: Rol) => {
      return rol.name == rolComparer.name;
    });
    if (equalRoles.length > 0) {
      throw Error('there is another Rol with the same name');
    }
    const editedRol = await RolesRepository.editRol(rol, id);
    return editedRol;
  } catch (error) {
    console.error('Error while editting Rol:', error);
    throw new Error('Error while editting Rol');
  }
};

export const disableRol = async (id: number) => {
  try {
    const disabledRol = await RolesRepository.disableRol(id);
    return disabledRol;
  } catch (error) {
    console.error('Error while deleting Rol:', error);
    throw new Error('Error while deleting Rol');
  }
};
