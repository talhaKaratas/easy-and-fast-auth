const easyAndFastAuth = require('./index');

const authConfig = {
  connectionString:
    'mongodb+srv://talhaKaratas:iU0unCqqSgBXZFxV@cluster0.dlarn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  portNumber: 3000,
  path: '/user'
};

easyAndFastAuth.routesConfig.tokenSecret = 'asdbıbdfıbf';

easyAndFastAuth.auth(authConfig);
