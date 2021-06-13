const router = require('express').Router();
const { registerValidation, loginValidation } = require('./validation');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { routesConfig } = require('./routesConfig');

//REGISTER
router.post('/register', async (req, res) => {
  //LETS VALIDATE THE DATA
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send('Email already exist');
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  //LETS VALIDATE THE DATA
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Checking if the user is already in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Email or password is wrong');
  }
  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Email or password is wrong');
  }

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, routesConfig.tokenSecret);
  res.header('auth-token', token).send({ token });
});

module.exports = router;
