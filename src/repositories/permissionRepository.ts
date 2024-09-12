import db from "./pg-connection";
const userProfileTable = 'user_profile';
const userRolesTable = 'user_roles';

export const getRoleAndPermissions = async (id: number) => {
  try {
    const profileRolesAndPermissions = await db(userProfileTable)
      .select(
        'roles.name as role_name',
        'permissions.name as permission_name',
        'permissions.description as permission_description',
        'permissions.display_name as permission_display_name',
        'permissions.path as permission_path',
        'permissions.sort as permission_sort',
        'roles.disabled as role_disabled',
        'permissions.disabled as permission_disabled'
      )
      .leftJoin('roles', 'user_profile.role_id', 'roles.id')
      .join('role_permissions', 'roles.id', 'role_permissions.role_id')
      .join('permissions', 'role_permissions.permission_id', 'permissions.id')
      .where('user_profile.id', id)
      .andWhere('roles.disabled', false)
      .andWhere('permissions.disabled', false);
    const userRolesAndPermissions = await db(userRolesTable)
      .select(
        'roles.name as role_name',
        'permissions.name as permission_name',
        'permissions.description as permission_description',
        'permissions.display_name as permission_display_name',
        'permissions.path as permission_path',
        'permissions.sort as permission_sort',
        'roles.disabled as role_disabled',
        'permissions.disabled as permission_disabled'
      )
      .leftJoin('roles', 'user_roles.role_id', 'roles.id')
      .join('role_permissions', 'roles.id', 'role_permissions.role_id')
      .join('permissions', 'role_permissions.permission_id', 'permissions.id')
      .where('user_roles.user_id', id)
      .andWhere('roles.disabled', false)
      .andWhere('permissions.disabled', false);
      
    const combinedRolesAndPermissionsRaw = [...profileRolesAndPermissions, ...userRolesAndPermissions];
    const rolesAndPermissions = combinedRolesAndPermissionsRaw.reduce((acc, row) => {
      const { role_name, permission_name, permission_description, permission_display_name, permission_path, permission_sort } = row;
      if (!acc[role_name]) {
        acc[role_name] = {
          permissions: []
        };
      }
      acc[role_name].permissions.push({
        name: permission_name,
        description: permission_description,
        display_name: permission_display_name,
        path: permission_path,
        sort: permission_sort
      });
      return acc;
    }, {});
    return rolesAndPermissions;
  } catch (error) {
    console.error('Error in GenericRoleRepository.getRoleAndPermissions:', error);
    throw new Error('Error fetching Roles and Permissions');
  }
}