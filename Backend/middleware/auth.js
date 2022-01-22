
const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('./errors');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        throw new ErrorHandler(401, 'Authorization Required');
    }

    const token = authorization.replace('Bearer ', ''); // delete Bearer from jwt
    let payload;

    try {
        payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    } catch (err) {
        throw new ErrorHandler(401, 'Authorization Required');
    }
    req.user = payload; // assigning the payload the the request object
    next(); // sending the request to the next middleware
};