require('dotenv').config();
var express = require("express");
var app = express();

const { PORT = 3000 } = process.env;

const routes = require('./routes/index');

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get('/user/:id/', (req, res, next) => {
    const { id } = req.params;
    res.send(`user id is ${id}`)
})

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});