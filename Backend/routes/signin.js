const router = require('express').Router(); // creating Express Router
const { celebrate, Joi } = require('celebrate'); // importing the celebreate validation lib

const users = require('../controllers/users');

router.post('/', celebrate({
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    }),
}), (req, res, next) => {
    users.signUserIn(req, res, next);
});

module.exports = router;