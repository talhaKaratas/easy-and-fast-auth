//VALIDATION
const Joi = require('@hapi/joi');
const { routesConfig } = require('./routesConfig');

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(routesConfig.nameMinLength).required(),
    email: Joi.string().min(routesConfig.emailMinLength).required().email(),
    password: Joi.string().min(routesConfig.passwordMinLength).required()
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(routesConfig.emailMinLength).required().email(),
    password: Joi.string().min(routesConfig.passwordMinLength).required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
