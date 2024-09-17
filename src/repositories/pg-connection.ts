import knex from 'knex';
import config from '../config/config';

const { database, env } = config;

const db = knex({
  client: 'pg',
  connection: {
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password,
    port: Number(database.port),
    ssl: env !== 'development',
  },
});

export default db;
