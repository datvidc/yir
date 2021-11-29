const User = require('../models/user');
const bcrypt = require('bcryptjs'); // importing bcrypt
const jwt = require('jsonwebtoken'); // importing JWT
const { ErrorHandler } = require('../middleware/errors'); // importing error handler

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.createNewUser = (req, res, next) => {
    const { name, password, email } = req.body;
    console.log(`welcome user ${name}`);

    bcrypt.hash(password, 10)
        .then((hash) => {
            User.create({
                name,
                email,
                password: hash,
            })
                .then((user) => {
                    res.send({
                        data: user.returnJson(),
                    })
                })
                .catch((err) => {
                    // not the final error block
                    if (err.name === 'ValidationError') {
                        throw new ErrorHandler(401, 'User validation failed');
                    } else if (err.name === 'MongoError') {
                        throw new ErrorHandler(409, 'User validation failed');
                    } else if (err.name === 'MongoServerError') {

                        throw new ErrorHandler(409, 'User already exists');
                    }
                    else {
                        console.log(err.name);
                        throw new ErrorHandler(500, err, 'Internal service error');
                    }
                }).catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.signUserIn = (req, res, next) => {
    const { email, password } = req.body;

    // using finduserbycredentials from static model method.
    User.findUserByCredentials(email, password, next)
        .then((user) => {
            if (user) {
                // authentication successful! user is in the user variable now for JWT
                const token = jwt.sign(
                    { _id: user._id },
                    NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
                    { expiresIn: '7d' },
                );
                res.send({ token });
            }
        })
        .catch((err) => {
            // authentication error
            next(err);
        });
};

// get user by user ID
module.exports.getUserById = (req, res, next) => {
    // ref middleware auth payload
    const userID = req.user._id;
    User.findById(userID)
        .then((user) => {
            if (user) {
                res.send({ data: user });
            } else {
                throw new ErrorHandler(404, 'User Not Found');
            }
        })
        .catch((err) => {
            next(err);
        });
};
/* DELETE THIS BOGUS METHOD - just for development */
module.exports.returnAll = (req, res, next) => {
    User.find({})
        .then((rs) => {
            res.send({ data: rs })
        })
        .catch((err) => {
            console.log(err);
            next(err);
        })
}