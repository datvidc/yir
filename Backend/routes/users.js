const router = require('express').Router();
const { celebrate, Joi } = require('celebrate'); // importing the celebreate validation lib

const users = require('../controllers/users');

router.get('/me', celebrate({
    headers: Joi.object()
        .keys({
            authorization: Joi.string().required(),
        })
        .options({ allowUnknown: true }),
}), (req, res, next) => {
    users.getUserById(req, res, next);
});

module.exports = router;