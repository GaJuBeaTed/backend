var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require(`fs`);

// configure our express instance with some body-parser settings 
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

const server = app.listen('5000', '127.0.0.1', ()=>console.log('Server is running'));