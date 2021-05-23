const express = require('express');
const fs = require("fs");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routeIndex = require("./routes/index.route");

const di = require("./di");

di.load();

if(fs.existsSync(".env")){
    const dotenv = require('dotenv');
    dotenv.config({path:__dirname + "/.env"});
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

routeIndex.loadRoutes(app);

module.exports = app;