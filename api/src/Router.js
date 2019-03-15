const express = require('express');
const multer = require('multer');
const tradenameVaccinesController = require('./controllers/VaccinesController');

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage
});

const apiRouter = express.Router({ mergeParams: true });

apiRouter.route('/vaccines')
  .get(tradenameVaccinesController.getVaccines);

apiRouter.route('/vaccines/antigens')
  .post(upload.single('csv'), tradenameVaccinesController.importAntigenJoins);

apiRouter.route('/vaccines/lots')
  .post(upload.single('csv'), tradenameVaccinesController.importLots);

apiRouter.route('/vaccines/parents')
  .post(upload.single('csv'), tradenameVaccinesController.addGenericVaccineId);

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('!');
  });
  app.use('/api', apiRouter);
};
