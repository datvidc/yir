const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({

    link: {
        // link —link to the article, required field. regex from user schema to validate input data
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/.test(v);
            },
            message: 'Sorry, the URL does not match my validation requirements',
        },
    },
    image: {
        // link —link to the pic/string, required field. regex from user schema to validate input data
        type: String,
        required: true,
        validate: {
            validator(v) {
                return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/.test(v);
            },
            message: 'Sorry, the URL does not match my validation requirements',
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    keyword: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('memo', memoSchema);