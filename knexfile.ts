import config from './src/config/config';

const { database } = config;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: database.host,
      database: database.name,
      user: database.user,
      password: database.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: database.host,
      database: database.name,
      user: database.user,
      password: database.password,
      ssl: {
        rejectUnauthorized: false,
      },
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
      host: database.host,
      database: database.name,
      user: database.user,
      password: database.password,
      ssl: {
        rejectUnauthorized: true,
      },
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
