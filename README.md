# fast-auth

Easy and fast authantication and authorization for your projects

**Note:** This package use mongoose and express.

**Note:** Connection string must be mongodb connection string

### Installation

```sh
    npm install fast-auth
```

### Usage

Add fast-auth package to your project.

```javascript
const fastAuth = require('fast-auth');
```

Fill the object according to your variablers.

```javascript
const authConfig = {
  connectionString: 'my connectionstring', //only mongoDB
  portNumber: 3000,
  path: '/user'
};
```

Then use this object as a parameter of the fastAuth function.

```javascript
fastAuth(authConfig);
```
