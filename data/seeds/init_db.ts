import { Knex } from 'knex';
// SOLO SE DEBE CORRER EN DEV o QA
const rolesTable = 'roles';
const userProfileTable = 'user_profile';
const permissionCategoriesTable = 'permission_categories';

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex(rolesTable).del();
  await knex(userProfileTable).del();
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
    },
  ]);
  await knex(permissionCategoriesTable).insert([
    { id: 1, name: 'Reportes'},
    { id: 2, name: 'Proceso de graduación'},
    { id: 3, name: 'Docentes'},
    { id: 4, name: 'Estudiantes'},
    { id: 5, name: 'Usuarios'},
  ])

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
