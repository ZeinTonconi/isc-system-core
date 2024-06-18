import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('stages', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();
    table.string('description').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('stages');
}
