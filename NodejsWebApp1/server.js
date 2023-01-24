'use strict';
const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require("hbs");
var app = express();

app.engine("hbs", expressHbs.engine({
    layoutDir: "views/partials",
    defaultLayout: "mainLayout",
    extname: 'hbs'
}));
app.set("view engine", "hbs");
hbs.registerPartials("/views");

var mainController = require('./controllers/mainController.js');
var userController = require('./controllers/userController.js')

try {
    app.get("/", mainController.main);

    app.get("/user/account/", userController.userAccount);
    app.listen(1337);
}
catch (exeption) {
    console.log(exeption);
}

