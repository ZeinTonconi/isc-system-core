import knex from 'knex';
const db = knex({
  client: 'pg',
  connection: {
    host: 'ep-calm-bird-74128633-pooler.us-east-1.postgres.vercel-storage.com',
    database: 'verceldb',
    user: 'default',
    password: 'mGpl4xbjP6MB',
    ssl: true,
  },
});

export default db;
