import { Knex } from 'knex';
// SOLO SE DEBE CORRER EN DEV o QA
const rolesTable = 'roles';
const userProfileTable = 'user_profile';
const permissionCategoriesTable = 'permission_categories';
const permissionsTable = 'permissions' 

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex(rolesTable).del();
  await knex(userProfileTable).del();
  await knex(permissionCategoriesTable).del();
  await knex(permissionsTable).del();

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
  await knex(permissionsTable).insert([
    { id:1, name:'Ver el dashboard', category_id:1},
    { id:2, name:'Ver reporte de los procesos de graduación', category_id:2},
    { id:3, name:'Crear proceso de graduación', category_id:2},
    { id:4, name:'Ver proceso de graduación por estudiantes', category_id:2},
    { id:5, name:'Asignar proceso de graduación', category_id:2},
    { id:6, name:'Ver lista de docentes', category_id:3},
    { id:7, name:'Agregar docente', category_id:3},
    { id:8, name:'Ver reporte de docente', category_id:3},
    { id:9, name:'Realizar una cita con docente', category_id:3},
    { id:10, name:'Eliminar docente', category_id:3},
    { id:11, name:'Editar información de docente', category_id:3},
    { id:12, name:'Ver lista de estudiantes', category_id:4},
    { id:13, name:'Agregar estudiante', category_id:4},
    { id:14, name:'Eliminar estudiante', category_id:4},
    { id:15, name:'Editar información de estudiante', category_id:4},
    { id:16, name:'Ver reporte de estudiante', category_id:4},
    { id:17, name:'Realizar cita con estudiante', category_id:4},
    { id:18, name:'Ver lista de usuarios', category_id:5},
    { id:19, name:'Ver reporte de usuarios', category_id:5},
    { id:20, name:'Eliminar usuario', category_id:5},
    { id:21, name:'Editar información de usuario', category_id:5},
    { id:22, name:'Agregar usuario', category_id:5},

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