const easyAndFastAuth = require('./index');

const authConfig = {
  connectionString: 'connection string',
  portNumber: 3000,
  path: '/user'
};

easyAndFastAuth.routesConfig.tokenSecret = 'asdbıbdfıbf';

easyAndFastAuth.auth(authConfig);
