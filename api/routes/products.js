const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using GET Request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using POST Request'
    });
});

module.exports = router;