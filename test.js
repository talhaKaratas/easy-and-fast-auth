const easyAndFastAuth = require('./index');

const authConfig = {
  connectionString:
    'mongodb+srv://talhaKaratas:iU0unCqqSgBXZFxV@cluster0.dlarn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  portNumber: 3000,
  path: '/user',
  tokenSecret: 'asdbıbdfıbf',
  nameMinLength: 6, //optional defualt 3
  passwordMinLength: 8, //optional default 6
  emailMinLength: 8 //optional default 6
};

easyAndFastAuth.auth(authConfig);
