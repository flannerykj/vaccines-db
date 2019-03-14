
module.exports = class GenericVaccinesController {
  async getVaccines(req, res, next) {
    try {
      res.status(200).send({ vaccines: [] });
    } catch (err) {
      next(new Error('Unable to get demo data'));
    }
  }
};
