const { body, validationResult } = require('express-validator');


exports.CreateUserValidate=[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  ]

exports.LoginValidate= [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists().isLength({ min: 5 }),
  ]

  