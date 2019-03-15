const express = require('express');
const multer = require('multer');
const genericVaccinesController = require('./controllers/GenericVaccinesController');

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage
});

const apiRouter = express.Router({ mergeParams: true });

apiRouter.route('/vaccines')
  .get(genericVaccinesController.getVaccines);

apiRouter.route('/vaccines/antigens')
  .post(upload.single('csv'), genericVaccinesController.importAntigenJoins);

apiRouter.route('/vaccines/lots')
  .post(upload.single('csv'), genericVaccinesController.importLots);

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('!');
  });
  app.use('/api', apiRouter);
};
