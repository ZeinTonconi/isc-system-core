import type { Knex } from 'knex';

exports.up = function (knex: Knex): Promise<void> {
  return knex.schema.table('graduation_process', table => {
    table.timestamp('tutor_approval_date').nullable();
    table.timestamp('reviewer_approval_date').nullable();
  });
};

exports.down = function (knex: Knex): Promise<void> {
  return knex.schema.table('graduation_process', table => {
    table.dropColumn('tutor_approval_date');
    table.dropColumn('reviewer_approval_date');
  });
};
