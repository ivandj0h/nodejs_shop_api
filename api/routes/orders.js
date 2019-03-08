const express = require('express');
const router = express.Router();

// This Route is use to GET all data
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! Your Order were Fetched!'
    });
});

// This Route is use to GET specific data based on id
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! This is Your Order Details!',
        orderId: req.params.orderId
    });
});

// This Route is use to POST data to Server
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        status: '201',
        message: 'It Works! Your Order were Created!',
        order: order
    });
});

// This Route is use to DELETE/REMOVE data from server
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! Your Order was Successfully Deleted!',
        orderId: req.params.orderId
    });
});


module.exports = router;