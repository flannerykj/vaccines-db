const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const dbConfig = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    }
  },
  logging: (arg) => {
    if (env === 'development') {
      console.log(arg);
    }
  }
};

module.exports = new Sequelize(dbConfig);
