import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    params: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      storage: process.env.DB_STORAGE,
      define: {
        underscore: true,
      },
      logging: false,
    },
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DATABASE,
    params: {
      host: process.env.TEST_DB_HOST,
      port: process.env.TEST_DB_PORT,
      dialect: process.env.TEST_DB_DIALECT,
      storage: process.env.TEST_DB_STORAGE,
      define: {
        underscore: true,
      },
      logging: false,
    },
  },
};

export { config };
