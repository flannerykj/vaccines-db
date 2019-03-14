require('dotenv').config();

const debug = require('debug')('express-sequelize');
const express = require('express');
const models = require('./models');
const sequelize = require('./utilities/sequelize');
const {
  rateLimit,
  logRequests,
  logErrors,
  useMiddleware
} = require('./utilities/server');

const app = express();
const port = process.env.PORT || 8080;

models.sequelize.sync().then(() => {
  logRequests(app);
  useMiddleware(app);
  rateLimit(app);
  require('./Router')(app);
  logErrors(app);
  app.listen(port, console.log(`listening on ${port}`));
});

module.exports = app;
