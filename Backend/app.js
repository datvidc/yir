var express = require("express");
var app = express();

const { PORT = 3000 } = process.env;
const { }



app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});


/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});