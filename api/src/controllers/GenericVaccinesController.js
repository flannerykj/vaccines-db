const models = require('../models');

async function getVaccines(req, res, next) {
  try {
    const vaccines = await models.GenericVaccine.findAll();
    res.status(200).send({ vaccines });
  } catch (err) {
    next(new Error(err));
  }
}

module.exports = {
  getVaccines
}
