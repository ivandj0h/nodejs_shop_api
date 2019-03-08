const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using GET Request'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === '1'){
        res.status(200).json({
            message: 'You Discovered the Special ID',
            id: id
        });
    }else{
        res.status(404).json({
            message:'Sorry, Not Found'
        });
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using POST Request'
    });
});

module.exports = router;