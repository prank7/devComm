var express = require('express');
var router = require('./server/router');
var mongoose = require('mongoose');

var app = express();

// Set up all routing middleware
router(app);

module.exports = app;
