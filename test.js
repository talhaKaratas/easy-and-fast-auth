const easyAndFastAuth = require('./index');

const authConfig = {
  connectionString:
    'mongodb+srv://talhaKaratas:WIThhBZg8LD5lzYb@cluster0.dlarn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  portNumber: 3000,
  path: '/user'
};

easyAndFastAuth(authConfig);
