import { Knex } from 'knex';

exports.seed = function (knex: Knex) {
  return knex('stages')
    .del()
    .then(function () {
      return knex('stages').insert([
        { id: 1, description: 'Inscripción' },
        { id: 2, description: 'Tutor' },
        { id: 3, description: 'Revisor' },
        { id: 4, description: 'Defensa Interna' },
        { id: 5, description: 'Defensa Externa' },
      ]);
    });
};
