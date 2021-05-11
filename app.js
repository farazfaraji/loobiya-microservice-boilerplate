const express = require('express');
const fs = require("fs");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const di = require("./di");

di.load();

if(fs.existsSync(".env")){
    const dotenv = require('dotenv');
    dotenv.config({path:__dirname + "/.env"});
}

const sampleRouter = require('./routes/sample.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/sample', sampleRouter);

module.exports = app;