# fast-auth

Easy and fast authantication and authorization for your projects

### usage

Add simple-auth package to your project.

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

Then use this object as a parameter of the simpleAuth function.

```javascript
fastAuth(authConfig);
```
