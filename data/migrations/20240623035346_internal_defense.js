"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = function (knex) {
    return knex.schema.hasTable('defense_details').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('defense_details', function (table) {
                table.increments('id').primary();
                table.integer('graduation_process_id').unsigned().notNullable();
                table.enu('type', ['internal', 'external']).notNullable();
                table.integer('president').unsigned();
                table.integer('first_juror').unsigned();
                table.integer('second_juror').unsigned();
                table.integer('reviewer').unsigned();
                table.integer('tutor').unsigned();
                table.decimal('grade', 5, 2);
                // Foreign keys
                table
                    .foreign('graduation_process_id')
                    .references('id')
                    .inTable('graduation_process')
                    .onDelete('CASCADE');
                table.foreign('president').references('id').inTable('users').onDelete('SET NULL');
                table.foreign('first_juror').references('id').inTable('users').onDelete('SET NULL');
                table.foreign('second_juror').references('id').inTable('users').onDelete('SET NULL');
                table.foreign('reviewer').references('id').inTable('users').onDelete('SET NULL');
                table.foreign('tutor').references('id').inTable('users').onDelete('SET NULL');
            });
        }
    });
};
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('defense_details');
};
