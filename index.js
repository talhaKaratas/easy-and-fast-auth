const mongoose = require('mongoose');
const express = require('express');
const mainRoute = require('./src/main');
const cors = require('cors');
const { routesConfig } = require('./src/routesConfig');

function auth(config) {
  const app = express();

  app.use(cors());

  if (!config.connectionString)
    return console.log('connectionString is not be empty or null');

  mongoose.connect(
    config.connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Connect to DB');
    }
  );

  app.use(express.json());
  app.use(config.path, mainRoute);

  app.listen(config.portNumber, () => {
    console.log('Up and Run');
  });
}

module.exports = { auth, routesConfig };
