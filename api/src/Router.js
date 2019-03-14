const express = require('express');
const genericVaccinesController = require('./controllers/GenericVaccinesController');

const apiRouter = express.Router({ mergeParams: true });

apiRouter.route('/vaccines')
  .get(genericVaccinesController.getVaccines);


module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('!');
  });

  app.use('/api', apiRouter);
};
