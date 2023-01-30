'use strict';
const { error } = require('console');
const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require("hbs");
const path = require('path');
const { Client } = require('pg');
var app = express();

/*//dbClient with credentials to database
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345Forking'
});
//Connect to database
client.connect()
    .then(() => console.log('Connected'))
    .catch((err) => console.log('Connection error', err.stack));*/

//Public files with acces from browser
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/user/regisration', express.static(path.join(__dirname, 'public')));
app.use('/user/regisration', express.static(path.join(__dirname, 'styles')));
app.use('/user/account/', express.static(path.join(__dirname, 'public')));
app.use('/user/account/', express.static(path.join(__dirname, 'styles')));

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

