require('dotenv').config();
var express = require("express");
const app = express();
const mongoose = require('mongoose'); // importing mongoose

const { PORT = 8080 } = process.env;
const { errors } = require('celebrate');
const { handleError } = require('./middleware/errors');
const routes = require('./routes/index');
const { DB_ADRESS } = require('./middleware/consts');
const cors = require('cors');
const helmet = require('helmet');

mongoose.set('runValidators', true); // Mongo doesnt run validation on update by default

mongoose.connect(DB_ADRESS, {});

app.use(express.json());

// Always wear a helmet :)
app.use(helmet());

// Getting the app to use cors
app.use(cors());
app.options('*', cors());


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