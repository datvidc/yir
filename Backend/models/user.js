const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // importing bcrypt
const { ErrorHandler } = require('../middleware/errors'); // importing error handler

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

userSchema.methods.returnJson = function removepass() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

userSchema.statics.findUserByCredentials = function usercred(email, password, next) {
    return this.findOne({ email }).select('+password')
        .then((user) => {
            if (!user) {
                throw new ErrorHandler(401, 'Incorrect email or password');
            }
            return bcrypt.compare(password, user.password)
                .then((matched) => {
                    if (!matched) {
                        throw new ErrorHandler(401, 'Incorrect email or password');
                    }
                    return user; // making user available
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((error) => {
            next(error);
        });
};


module.exports = mongoose.model('user', userSchema);