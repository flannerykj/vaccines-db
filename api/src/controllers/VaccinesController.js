const { promisify } = require('util');
const csv = require('csv');

const parseCSV = promisify(csv.parse);
const models = require('../models');
const { sequelize } = require('../models');

async function getVaccines(req, res, next) {
  try {
    const vaccines = await models.GenericVaccine.findAll();
    res.status(200).send({ vaccines });
  } catch (err) {
    next(new Error(err));
  }
}

async function addGenericVaccineId(req, res, next) {
  try {
    const vaccines = await models.TradenameVaccine.findAll();

    await sequelize.transaction(async (transaction) => {
      return Promise.all(vaccines.map(async (v) => {
        const { generic_parent_concept_code } = v;
        const parent = await models.GenericVaccine.findOne({ where: { concept_code: generic_parent_concept_code } });
        if (parent) {
          return v.update({
            GenericVaccineId: parent.id
          }, { transaction })
        }
        console.log('no parent for: ', v);
        return null;
      }));
    })
    res.status(200).send({});
  } catch (error) {
    next(new Error(error));
  }
}
async function importLots(req, res, next) {
  try {
    const string = req.file.buffer.toString();
    const parsed = await parseCSV(string, { columns: true, rowDelimiter: '\n' });

    const lots = await Promise.all(parsed.forEach(async (row) => {
      const {
        concept_code, lot_number, tradename_picklist_en, din, review_date, expiry_date
      } = row;
      const product = await models.Product.findOne({ where: { din: din } });
      const vaccine = await models.TradenameVaccine.findOne({ where: { concept_code: concept_code } });
      return sequelize.transaction(async (transaction) => (
        models.Lot.create({
          concept_code,
          lot_number,
          tradename_picklist_en,
          din,
          review_date,
          expiry_date,
          TradenameVaccineId: vaccine && vaccine.id,
          ProductId: product && product.id
        }, { transaction })
      ));
    }));
    res.status(200).send({ lots });
  } catch (err) {
    next(new Error(err));
  }
}

async function importAntigenJoins(req, res, next) {
  try {
    const string = req.file.buffer.toString();
    const parsed = await parseCSV(string, { columns: true, rowDelimiter: '\n' });

    const result = await Promise.all(parsed.forEach(async (row) => {
      const vaccineCode = row['Agent SNOMED CT Id'];
      const vaccineNameEn = row['Agent Display Name (en)'];
      const vaccineNameFr = row['Agent Display Name (fr)'];
      const vaccine = await models.TradenameVaccine.findOne({ where: { concept_code: vaccineCode } });

      const antigenCode = row['Antigen SNOMED CT Id'];
      const antigenNameEn = row['Antigen Display Name (en)'];
      const antigenNameFr = row['Antigen Display Name (fr)'];
      const antigen = await models.Antigen.findOne({ where: { concept_code: antigenCode } });

      const diseaseCode = row['Disease SNOMED CT Id'];
      const diseaseNameEn = row['Disease Display Name (en)'];
      const diseaseNameFr = row['Disease Display Name (fr)'];

      const disease = await models.Disease.findOne({ where: { concept_code: diseaseCode } });

      if (antigen) {
        if (vaccine) {
          vaccine.addAntigen(antigen);
        } else { console.log('unable to find vaccine'); }
        if (disease) {
          disease.addAntigen(antigen);
        } else { console.log('unable to find disease'); }
      } else { console.log('unable to find antigen'); }
    }));
    res.status(200).send({});
  } catch (err) {
    next(new Error(err));
  }
}
module.exports = {
  getVaccines,
  addGenericVaccineId,
  importAntigenJoins,
  importLots
}
