const express = require('express');

const app = express();

const producRoutes = require('./api/routes/products');

app.use('/products', producRoutes);

module.exports = app;