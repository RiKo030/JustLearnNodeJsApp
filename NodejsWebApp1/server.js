'use strict';
const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require("hbs");
const path = require('path');
var app = express();

//Public files with acces from browser
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'styles')));

app.engine("hbs", expressHbs.engine({
    layoutDir: "views/partials",
    defaultLayout: "mainLayout",
    extname: 'hbs'
}));
app.set("view engine", "hbs");
hbs.registerPartials("/views");

var mainController = require('./controllers/mainController.js');
var userController = require('./controllers/userController.js');

try {
    app.get("/", mainController.main);
    app.get("/user/regisration", userController.userRegistration);
    app.get("/user/account/", userController.userAccount);
    app.listen(1337);
}
catch (exeption) {
    console.log(exeption);
}

