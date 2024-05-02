import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('graduation_process', (table: Knex.TableBuilder) => {
    table.integer('stage_id').unsigned();
    table.foreign('stage_id').references('id').inTable('stages');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('graduation_process', (table: Knex.TableBuilder) => {
    table.dropForeign(['stage_id']);
    table.dropColumn('stage_id');
  });
}
