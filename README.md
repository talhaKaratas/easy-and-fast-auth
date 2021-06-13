# easy-and-fast-auth

Easy and fast authantication and authorization for your projects

**Note:** This package use mongoose and express.

**Note:** Connection string must be mongodb connection string

### Installation

```sh
    npm install easy-and-fast-auth
```

### Usage

Add easy-and-fast-auth package to your project.

```javascript
const easyAndFastAuth = require('easy-and-fast-auth');
```

Fill the object according to your variablers.

```javascript
const authConfig = {
  connectionString: 'my connectionstring', //only mongoDB
  portNumber: 3000,
  path: '/user'
};
```

Set jsonwebtoken token secret.

```javascript
easyAndFastAuth.routesConfig.tokenSecret = 'asdbıbdfıbf';
```

Then use this object as a parameter of the easyAndFastAuth function.

```javascript
easyAndFastAuth.auth(authConfig);
```

## Post for Register

http://localhost:3000/user/register

##### Request Body

```json
{
  "name": "my name",
  "email": "myemail@email.com",
  "password": "mypassword"
}
```

## Post for Login

http://localhost:3000/user/login

##### Request Body

```json
{
  "email": "myemail@email.com",
  "password": "mypassword"
}
```
