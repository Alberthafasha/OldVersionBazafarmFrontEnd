// import { config  } from 'dotenv'
const config = require('dotenv').config;

config();

module.exports = {
    development: {
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      // dialectOptions: {
      //   ssl: {
      //     rejectUnauthorized: false, // very important
      //   }
      // },
      logging: false,
      seederStorage: 'sequelize'
    },
    test: {
      username: process.env.DB_USER,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      // dialectOptions: {
      //   ssl: {
      //     rejectUnauthorized: false, // very important
      //   }
      // },
      logging: false,
      seederStorage: 'sequelize'
    },
    production: {
      username: process.env.DB_USER,
      use_env_variable: 'DATABASE_URL',
      dialect: 'mysql',
      // dialectOptions: {
      //   ssl: {
      //     rejectUnauthorized: false, // very important
      //   }
      // },
      logging: false,
      seederStorage: 'sequelize'
    }
  };
