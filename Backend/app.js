require('dotenv').config();
var express = require("express");
var app = express();
const mongoose = require('mongoose'); // importing mongoose

const { PORT = 3000 } = process.env;
const { errors } = require('celebrate');
const { handleError } = require('./middleware/errors');
const routes = require('./routes/index');
const { DB_ADRESS } = require('./middleware/consts');

mongoose.set('runValidators', true); // Mongo doesnt run validation on update by default

mongoose.connect(DB_ADRESS, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use('/', routes);

// only celebrate errors
app.use(errors());

// error handler
app.use((err, req, res, next) => {
    handleError(err, res);
});

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});