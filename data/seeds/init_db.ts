import { Knex } from 'knex';
const rolesTable = 'roles';
const userProfileTable = 'user_profile';
const professorTable = 'professors';
const permissionCategoriesTable = 'permission_categories';
const permissionsTable = 'permissions'
const permissionCategoriesTable = 'permission_categories';

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex(rolesTable).del();
  await knex(userProfileTable).del();
  await knex(professorTable).del();
  await knex(permissionCategoriesTable).del();
  await knex(permissionsTable).del();
  await knex(permissionCategoriesTable).del();

  await knex(rolesTable).insert([
    { id: 1, name: 'admin' },
    { id: 2, name: 'professor' },
    { id: 3, name: 'student' },
  ]);

  await knex(userProfileTable).insert([
    {
      id: 1,
      username: 'admin',
      name: 'Jhonny',
      lastname: 'Cabezas',
      mothername: 'Gomez',
      password: '$2a$10$qv1IXHI4lhio8vJGS6O1UuIzTqTpdHY9dz5gyA9D5PFb1pGxJv3Kq',
      email: 'admin@gmail.com',
      phone: '77665544',
      role_id: 1,
      code: '12345',
    },
  ]);
  await knex(permissionCategoriesTable).insert([
    { id: 1, name: 'Reportes' },
    { id: 2, name: 'Proceso de graduación' },
    { id: 3, name: 'Docentes' },
    { id: 4, name: 'Estudiantes' },
    { id: 5, name: 'Usuarios' },
  ])
  await knex(permissionsTable).insert([
    { id: 1, description: 'Dashboard report', display_name: 'Dashboard', path: '/dashboard', sort: 1, type: 'page', disabled: 'false', name: 'Ver el dashboard', category_id: 1 },
    { id: 2, description: 'Graduation process report', display_name: 'Procesos', path: '/process', sort: 2, type: 'page', disabled: 'false', name: 'Ver reporte de los procesos de graduación', category_id: 2 },
    { id: 3, description: 'Create graduation process', display_name: 'Procesos', path: '/process', sort: 2, type: 'page', disabled: 'false', name: 'Crear proceso de graduación', category_id: 2 },
    { id: 4, description: 'Graduation process students', display_name: 'Procesos', path: '/process', sort: 2, type: 'page', disabled: 'false', name: 'Ver proceso de graduación por estudiantes', category_id: 2 },
    { id: 5, description: 'Assign graduation process', display_name: 'Procesos', path: '/process', sort: 2, type: 'page', disabled: 'false', name: 'Asignar proceso de graduación', category_id: 2 },
    { id: 6, description: 'Professors list', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Ver lista de docentes', category_id: 3 },
    { id: 7, description: 'Add professor', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Agregar docente', category_id: 3 },
    { id: 8, description: 'Professor report', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Ver reporte de docente', category_id: 3 },
    { id: 9, description: 'Schedule an appointment with a professor', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Realizar una cita con docente', category_id: 3 },
    { id: 10, description: 'Delete a professor', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Eliminar docente', category_id: 3 },
    { id: 11, description: 'Edit a professor', display_name: 'Docentes', path: '/professors', sort: 3, type: 'page', disabled: 'false', name: 'Editar información de docente', category_id: 3 },
    { id: 12, description: 'Students list', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Ver lista de estudiantes', category_id: 4 },
    { id: 13, description: 'Add student', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Agregar estudiante', category_id: 4 },
    { id: 14, description: 'Delete a student', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Eliminar estudiante', category_id: 4 },
    { id: 15, description: 'Edit a student', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Editar información de estudiante', category_id: 4 },
    { id: 16, description: 'Student report', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Ver reporte de estudiante', category_id: 4 },
    { id: 17, description: 'Schedule an appointment with a student', display_name: 'Estudiantes', path: '/students', sort: 4, type: 'page', disabled: 'false', name: 'Realizar cita con estudiante', category_id: 4 },
    { id: 18, description: 'Users list', display_name: 'Usuarios', path: '/users', sort: 5, type: 'page', disabled: 'false', name: 'Ver lista de usuarios', category_id: 5 },
    { id: 19, description: 'User report', display_name: 'Usuarios', path: '/users', sort: 5, type: 'page', disabled: 'false', name: 'Ver reporte de usuarios', category_id: 5 },
    { id: 20, description: 'Delete a user', display_name: 'Usuarios', path: '/users', sort: 5, type: 'page', disabled: 'false', name: 'Eliminar usuario', category_id: 5 },
    { id: 21, description: 'Edit a user', display_name: 'Usuarios', path: '/users', sort: 5, type: 'page', disabled: 'false', name: 'Editar información de usuario', category_id: 5 },
    { id: 22, description: 'Add a user', display_name: 'Usuarios', path: '/users', sort: 5, type: 'page', disabled: 'false', name: 'Agregar usuario', category_id: 5 },

  ])
  await knex('user_profile').insert({
    id: 2,
    username: 'professor',
    name: 'Alexis',
    lastname: 'Marechal',
    mothername: 'Marin',
    password: '$2a$10$qv1IXHI4lhio8vJGS6O1UuIzTqTpdHY9dz5gyA9D5PFb1pGxJv3Kq',
    email: 'alexismarechal@upb.edu',
    phone: '12345678',
    role_id: 2,
    code: '12345',
  });

  await knex('professors').insert({
    id: 2,
    degree: 'PhD.',
    department: 'Computer Science',
    specialty: 'Artificial Intelligence',
  });


  // // llenar la tabla de permisos
  // await knex('permissions').insert([
  //   { id: 1, description: 'dashboard' },
  //   { id: 2, description: 'events' },
  //   { id: 3, description: 'permissions' },
  //   { id: 4, description: 'roles' },
  //   { id: 4, description: 'roles' },
  // ]);
  // return knex('stages')
  //   .del()
  //   .then(function () {
  //     return knex('stages').insert([
  //       { id: 1, description: 'Inscripción' },
  //       { id: 2, description: 'Tutor' },
  //       { id: 3, description: 'Revisor' },
  //       { id: 4, description: 'Defensa Interna' },
  //       { id: 5, description: 'Defensa Externa' },
  //     ]);
  //   });
};
