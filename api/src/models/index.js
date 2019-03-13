function importModels(sequelize, encKey) {
  const models = fs.readdirSync(__dirname)
    .filter(filterModelFiles)
    .reduce((memo, file) => {
      const model = sequelize.import(path.join(__dirname, file));
      memo[model.name] = model;
      return memo;
    }, {});

  const defsSchema = fs.readFileSync(path.join(__dirname, 'schemas', 'defs', 'defs.json'), 'utf-8');
  // ajv.addSchema(JSON.parse(defsSchema));
  fs.readdirSync(path.join(__dirname, 'schemas'))
    .forEach((file) => {
      if (file.match(/.json/)) {
        const contents = fs.readFileSync(path.join(__dirname, 'schemas', file), 'utf-8');
        const resolved = resolveContents(JSON.parse(contents), JSON.parse(defsSchema).definitions);
        const schemaName = path.basename(file, '.json');
        ajv.addSchema(resolved, schemaName);
      }
    });

  Object.keys(models).forEach((key) => {
    if (models[key].setSchema) {
      models[key].setSchema(ajv);
    }
  });

  Object.keys(models).forEach((key) => {
    if (models[key].associate) {
      models[key].associate(models);
    }
  });

  if (encKey) {
    Object.keys(models).forEach((model) => {
      if (models[model].setKey) {
        models[model].setKey(encKey);
      }
    });
  }
  return models;
}

module.exports = (() => {
  let m;
  let s;
  return {
    setModels: (sequelize, key) => {
      s = sequelize;
      m = importModels(sequelize, key);
    },
    get models() {
      return m;
    },
    get sequelize() {
      return s;
    }
  };
})();
