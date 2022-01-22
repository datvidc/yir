const router = require('express').Router();
const { celebrate, Joi } = require('celebrate'); // importing the celebreate validation lib

const { createMemo, returnUsersMemo, killMemo } = require('../controllers/memos');

router.post('/', celebrate({
    body: Joi.object().keys({
        ocasion: Joi.string().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
        date: Joi.string().required(),
        image: Joi.string().uri().required(),
    }),
}), createMemo);

router.get('/', celebrate({
    headers: Joi.object()
        .keys({
            authorization: Joi.string().required(),
        })
        .options({ allowUnknown: true }),
}), returnUsersMemo);

router.delete('/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.string().required().length(24).hex(),
    }),
}), killMemo);

module.exports = router;