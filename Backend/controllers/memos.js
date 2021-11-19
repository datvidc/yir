const Memo = require('../models/memo');
const { ErrorHandler } = require('../middleware/errors'); // importing error handler

module.exports.createMemo = (req, res, next) => {
    const {
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
    } = req.body;

    Memo.create({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
        owner: req.user._id,
    })
        .then((memo) => {
            res.send({ data: memo });
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                throw new ErrorHandler(400, err.message);
            }
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.returnUsersMemo = (req, res, next) => {
    const userID = req.user._id;

    Memo.find({ owner: userID })
        .then((memo) => {
            res.send(memo);
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.killMemo = (req, res, next) => {
    const memoId = req.params.id;

    Memo.findOneAndDelete(
        // mongoDB shell method. I can give some filters
        { _id: memoId, owner: { _id: req.user._id } },
    )
        .then((memo) => {
            if (memo) {
                res.send(memo);
            } else {
                throw new ErrorHandler(404, 'server could not find the requested ressource');
            }
        })
        .catch((err) => {
            next(err);
        });
};