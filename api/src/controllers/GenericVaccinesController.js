const { models, sequelize } = require('../models');

async function getVaccines(req, res, next) {
  try {
    console.log('trying');
    const v = await models.GenericVaccine.findAll();
    console.log('v: ', v);
    res.status(200).send({ vaccines: [] });
  } catch (err) {
    next(new Error(err));
  }
}

module.exports = {
  getVaccines
}
