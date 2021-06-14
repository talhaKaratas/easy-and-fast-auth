# easy-and-fast-auth

Easy and fast authantication and authorization for your projects

**Note:** This package use mongoose, express, jsonwebtoken and bcryptjs.

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
  path: '/user',
  tokenSecret: 'asdbıbdfıbf',
  nameMinLength: 6, //optional, defualt 3
  passwordMinLength: 8, //optional, default 6
  emailMinLength: 8 //optional, default 6
};
```

Let's explane above code

- **connectionString:** Your mongoDB connectionString.
- **portNumber:** Number the port you want to run your server on.
- **path:** Enter the route like '/user', '/api'.
- **nameMinLength:** Minimum name lenght. if user's name is less than nameMinLength, register or login doesn't success. This field is optional. if you don't set variable, default value be 3
- **emailMinLength:** Minimum email lenght. if user's email is less than emailMinLength, register or login doesn't success. This field is optional. if you don't set variable, default value be 6
- **passwordMinLength:** Minimum password lenght. if user's password is less than passwordMinLength, register or login doesn't success. This field is optional. if you don't set variable, default value be 6

Then use this object as a parameter of the easyAndFastAuth function.

```javascript
easyAndFastAuth.auth(authConfig);
```

## Post for Register

```
http://localhost:3000/user/register
```

##### Request Body

```json
{
  "name": "my name",
  "email": "myemail@email.com",
  "password": "mypassword"
}
```

## Post for Login

```
http://localhost:3000/user/login
```

##### Request Body

```json
{
  "email": "myemail@email.com",
  "password": "mypassword"
}
```
