const express = require('express');
const multer = require('multer');
const tradenameVaccinesController = require('./controllers/VaccinesController');

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage
});

const apiRouter = express.Router({ mergeParams: true });

apiRouter.route('/vaccines/tradename')
  .get(tradenameVaccinesController.getTradenameVaccines);

apiRouter.route('/vaccines/generic')
  .get(tradenameVaccinesController.getGenericVaccines);

apiRouter.route('/vaccines/antigens')
  .post(upload.single('csv'), tradenameVaccinesController.importAntigenJoins);
apiRouter.route('/vaccines/lots')
  .post(upload.single('csv'), tradenameVaccinesController.importLots);

apiRouter.route('/vaccines/parents')
  .post(tradenameVaccinesController.addGenericVaccineId);

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('!');
  });
  app.use('/api', apiRouter);
};
