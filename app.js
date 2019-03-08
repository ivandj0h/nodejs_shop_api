const express = require('express');
const app = express();
const morgan = require('morgan');

const producRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Use Morgan as Midleware
app.use(morgan('dev'));

// this code is use to execute /products
app.use('/products', producRoutes);

// this code is use to execute /orders
app.use('/orders', orderRoutes);

// Handle Error for Not Found (404) Request
app.use((req, res, next) => {
    const error = new Error('Sorry!, Not Found!');

    error.status = 404;
    next(error);
});

// Handling Other Error for All Request
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = app;