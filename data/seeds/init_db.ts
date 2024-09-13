import { Knex } from 'knex';
// SOLO SE DEBE CORRER EN DEV o QA
const rolesTable = 'roles';
const userProfileTable = 'user_profile';
const professorTable = 'professors';
const internTable = 'interns';
const eventTable = 'events';
const eventInternTable = 'events_interns';

exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex(rolesTable).del();
  await knex(userProfileTable).del();
  await knex(professorTable).del();
  await knex('permissions').del();
  await knex(internTable).del();
  await knex(eventTable).del();
  await knex(eventInternTable).del();

  await knex(rolesTable).insert([
    { id: 1, name: 'admin' },
    { id: 2, name: 'professor' },
    { id: 3, name: 'student' },
    { id: 4, name: 'intern' },
    { id: 5, name: 'program_director' },
    { id: 6, name: 'supervisor' },
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

  await knex(userProfileTable).insert({
    id: 3,
    username: 'intern',
    name: 'INTERN-ACME',
    lastname: 'Marechal',
    mothername: 'Marin',
    password: '$2a$10$qv1IXHI4lhio8vJGS6O1UuIzTqTpdHY9dz5gyA9D5PFb1pGxJv3Kq',
    email: 'intern@gmail.com',
    phone: '12345678',
    role_id: 4,
    code: '12345',
  });
  await knex(userProfileTable).insert({
    id: 4,
    username: 'director',
    name: 'DIRECTOR-ACME',
    lastname: 'Marechal',
    mothername: 'Marin',
    password: '$2a$10$qv1IXHI4lhio8vJGS6O1UuIzTqTpdHY9dz5gyA9D5PFb1pGxJv3Kq',
    email: 'director@gmail.com',
    phone: '12345678',
    role_id: 5,
    code: '12345',
  });
  await knex(userProfileTable).insert({
    id: 5,
    username: 'supervisor',
    name: 'SUPERVISOR-ACME',
    lastname: 'Marechal',
    mothername: 'Marin',
    password: '$2a$10$qv1IXHI4lhio8vJGS6O1UuIzTqTpdHY9dz5gyA9D5PFb1pGxJv3Kq',
    email: 'supervisor@gmail.com',
    phone: '12345678',
    role_id: 6,
    code: '12345',
  });

  await knex('professors').insert({
    id: 2,
    degree: 'PhD.',
    department: 'Computer Science',
    specialty: 'Artificial Intelligence',
  });

  await knex(internTable).insert([
    {
      id: 1,
      user_profile_id: 1,
      total_hours: 10,
      pending_hours: 5,
      completed_hours: 5,
    },
    {
      id: 2,
      user_profile_id: 2,
      total_hours: 15,
      pending_hours: 10,
      completed_hours: 5,
    },
    {
      id: 3,
      user_profile_id: 2,
      total_hours: 20,
      pending_hours: 10,
      completed_hours: 10,
    },
  ]);

  await knex(eventTable).insert([
    {
      id: 1,
      responsible_intern_id: 1,
      title: 'Event 1',
      description: 'Description for event 1',
      location: 'Location 1',
      duration_hours: 2,
      max_interns: 10,
      min_interns: 5,
      assigned_hours: 4,
      start_date: knex.fn.now(),
      end_date: knex.fn.now(),
      registration_deadline: knex.fn.now(),
      start_cancellation_date: knex.fn.now(),
      end_cancellation_date: knex.fn.now(),
    },
    {
      id: 2,
      responsible_intern_id: 2,
      title: 'Event 2',
      description: 'Description for event 2',
      location: 'Location 2',
      duration_hours: 3,
      max_interns: 15,
      min_interns: 7,
      assigned_hours: 4,
      start_date: knex.fn.now(),
      end_date: knex.fn.now(),
      registration_deadline: knex.fn.now(),
      start_cancellation_date: knex.fn.now(),
      end_cancellation_date: knex.fn.now(),
    },
    {
      id: 3,
      responsible_intern_id: 3,
      title: 'Event 3',
      description: 'Description for event 3',
      location: 'Location 3',
      duration_hours: 4,
      max_interns: 20,
      min_interns: 10,
      assigned_hours: 4,
      start_date: knex.fn.now(),
      end_date: knex.fn.now(),
      registration_deadline: knex.fn.now(),
      start_cancellation_date: knex.fn.now(),
      end_cancellation_date: knex.fn.now(),
    },
  ]);

  await knex(eventInternTable).insert([
    {
      intern_id: 1,
      event_id: 1,
      type: 'accepted',
      worked_hours: 20,
    },
    {
      intern_id: 2,
      event_id: 2,
      type: 'pending',
      worked_hours: 20,
    },
    {
      intern_id: 3,
      event_id: 3,
      type: 'reserve',
      worked_hours: 20,
    },
  ]);

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
