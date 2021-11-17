const { NODE_ENV, MONGO } = process.env;

module.exports.DB_ADRESS = NODE_ENV === 'production' ? MONGO : 'mongodb://localhost:27017/news';