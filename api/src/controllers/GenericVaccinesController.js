const { models, sequelize } = require('../models');

async function getVaccines(req, res, next) {
  try {
    const v = await models.GenericVaccine.findAll();
    console.log('v: ', v);
    res.status(200).send({ vaccines: [] });
  } catch (err) {
    next(new Error('Unable to get demo data'));
  }
}

module.exports = {
  getVaccines
}
