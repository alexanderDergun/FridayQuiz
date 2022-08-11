const morgan = require('morgan');
const express = require('express');
const ssr = require('../middleware/ssr');

const app = express();


module.exports = function config(app) {
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(express.static('public'))
app.use(ssr);
}

