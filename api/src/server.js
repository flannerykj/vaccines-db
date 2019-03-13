require('dotenv').config();

const express = require('express');
const { setModels } = require('./models');
const sequelize = require('./utilities/sequelize');

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const initializer = require('./utilities/initializer');

initializer()
  .then((locals) => {
    app.locals = locals;
    setModels(sequelize, locals.DEK);
    app.use((req, res, next) => {
      req.sessionKey = locals.SEK;
      next();
    });
    require('./Router')(app);
    logErrors(app);
    app.listen(port, console.log(`listening on ${port}`));
  })
  .catch(console.log);

module.exports = app;
