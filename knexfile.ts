/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'ep-calm-bird-74128633-pooler.us-east-1.postgres.vercel-storage.com',
      database: 'verceldb',
      user: 'default',
      password: 'mGpl4xbjP6MB',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'ep-calm-bird-74128633-pooler.us-east-1.postgres.vercel-storage.com',
      database: 'verceldb',
      user: 'default',
      password: 'mGpl4xbjP6MB',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
