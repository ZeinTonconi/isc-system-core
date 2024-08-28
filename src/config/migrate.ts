import knex from 'knex';
import knexConfig from '../knexfile';
import { Knex } from 'knex';

const environment = process.env.NODE_ENV || 'development';
const config: Knex.Config = knexConfig[environment];
const db = knex(config);

export async function runMigrations() {
  try {
    await db.migrate.latest();
    console.log('Migrations are up to date');
  } catch (err) {
    console.error('Error running migrations:', err);
    process.exit(1);
  }
}