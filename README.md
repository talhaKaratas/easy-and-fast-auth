# fast-auth

Easy and fast authantication and authorization for your projects

### usage

Add simple-auth package to your project.

```javascript
const simpleAuth = require('simple-auth');
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
simpleAuth(authConfig);
```
