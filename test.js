const easyAndFastAuth = require('./index');

const authConfig = {
  connectionString: 'my connection string',
  portNumber: 3000,
  path: '/user'
};

easyAndFastAuth(authConfig);
