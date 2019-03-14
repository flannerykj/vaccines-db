const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const redis = require('redis');

const { RateLimitedError } = require('../utilities/errors');
const logger = require('./logger');

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);
redisClient.select(1);

module.exports = {
  rateLimit: (app) => {
    if (!process.env.NODE_ENV.match(/test/)) {
      const limiter = require('express-limiter')(app, redisClient);
    }
  },

  logRequests: (app) => {
    if (!process.env.NODE_ENV.match(/test/)) {
      const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
      app.use(morgan(logFormat, {
        skip: (req) => req.path === '/'
      }));
    }
  },

  useMiddleware: (app) => {
    app.use(helmet());
    app.use(helmet.noCache());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors({
      origin: process.env.CORS_ORIGIN || /\.dothealth\.ca$/,
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
      allowedHeaders: ['X-Requested-With', 'content-type', 'x-dothealth-token', 'Authorization', 'authorization']
    }));
    app.disable('x-powered-by');
  },

  logErrors: (app) => {
    app.use((err, req, res, next) => {
      if (!process.env.NODE_ENV.match(/test/)) {
        console.log(err);
      }
      if (process.env.NODE_ENV !== 'development') {
        delete err.stack;
      }
      logger.error(err.message, req.path, req.params, req.query, req.ip);
      res.status(err.statusCode || 500).json({ error: err });
      next();
    });
  }
};
