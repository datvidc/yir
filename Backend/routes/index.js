const router = require('express').Router();
const Auth = require('../middleware/auth');
const { ErrorHandler } = require('../middleware/errors');

const Memorouter = require('./memo');
const UserRouter = require('./users');
const signinRouter = require('./signin');
const signupRouter = require('./signup.js');

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);

router.use('/memo', Auth, Memorouter);
router.use('/users', Auth, UserRouter);

// this goes last-catchall.
router.get('*', () => {
    throw new ErrorHandler(404, 'Requested resource not found');
});

module.exports = router;