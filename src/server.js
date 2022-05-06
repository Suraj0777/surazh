const db = require('../config/db.config');
const express = require('express');

const homeRouter = require('../routes/router')

const PORT = process.env.PORT || 8080

db.sequelize
    .sync()
    .catch(err => {
        console.log(err);
    })

const app = express();

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static('./views/styles'));

app.use("/", homeRouter)


app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))