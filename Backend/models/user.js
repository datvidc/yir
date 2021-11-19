const mongoose = require('mongoose');

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


module.exports = mongoose.model('user', userSchema);