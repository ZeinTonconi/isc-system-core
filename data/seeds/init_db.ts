import { Knex } from 'knex';
// SOLO SE DEBE CORRER EN DEV o QA
const rolesTable = 'roles';
const userProfileTable = 'user_profile';
const professorTable = 'professors';
const eventTable = 'events';
const internsTable = 'interns';
const eventIntensTable = 'events_interns';

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex(rolesTable).del();
  await knex(userProfileTable).del();
  await knex(professorTable).del();
  await knex('permissions').del();
  await knex(eventTable).del();
  await knex(internsTable).del();
  await knex(eventIntensTable).del();

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

  await knex(userProfileTable).insert({
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

  await knex(internsTable).insert({
    id: 1,
    user_profile_id: 1,
    total_hours: 50,
    pending_hours: 30,
    completed_hours: 20,
  });

  await knex(eventTable).insert({
    id: 1,
    responsible_intern_id: 1,
    title: 'Coding Bootcamp',
    description: 'A full-day event focused on web development and coding challenges.',
    location: 'Main Campus, Room 101',
    duration_hours: 8,
    max_interns: 50,
    min_interns: 10,
    start_date: '2024-09-10 09:00:00',
    end_date: '2024-09-10 17:00:00',
    registration_deadline: '2024-09-05 23:59:00',
    start_cancellation_date: '2024-09-06 00:00:00',
    end_cancellation_date: '2024-09-08 23:59:00',
  });

  await knex(eventIntensTable).insert({
    intern_id: 1,
    event_id: 1,
    type: 'pending',
  });

  // llenar la tabla de permisos
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
