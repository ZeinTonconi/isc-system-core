import dotenv from 'dotenv';
dotenv.config();

const DEFAULT_SERVER_PORT = 8000;
const DEFAULT_NODE_ENV = 'development';

const config = {
  env: process.env.NODE_ENV || DEFAULT_NODE_ENV,
  server: {
    port: Number(process.env.SERVER_PORT) || DEFAULT_SERVER_PORT,
  },
  database: {
    host: process.env.DB_HOST || 'ep-calm-bird-74128633-pooler.us-east-1.postgres.vercel-storage.com',
    name: process.env.DB_NAME || 'verceldb',
    user: process.env.DB_USER || 'default',
    password: process.env.DB_PASSWORD || 'mGpl4xbjP6MB',
    port: process.env.DB_PORT || 5432,
  },
  jwt: {
    tokenSecret: process.env.TOKEN_SECRET || 'yourSecretKey',
  },
  allowedOrigins: [],
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD || '123456',
  mailer: {
    emailService: process.env.EMAIL_SERVICE,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
  },
};

export default config;
