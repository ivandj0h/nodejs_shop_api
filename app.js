const express = require('express');
const app = express();
const producRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');


// this code is use to execute /products
app.use('/products', producRoutes);

// this code is use to execute /orders
app.use('/orders', orderRoutes);


module.exports = app;