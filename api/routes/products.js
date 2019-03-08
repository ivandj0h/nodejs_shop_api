const express = require('express');

const router = express.Router();

// This Route is use to GET all data
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using GET Request'
    });
});

// This Route is use to GET specific data based on id
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

// This Route is use to POST data to server
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'It Works! SomeOne access to /products using POST Request'
    });
});

// This Route is use to UPDATE data to server
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Updated Successfully!!'
    });
});

// This Route is use to DELETE/REMOVE data from server
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Deleted Successfully!!'
    });
});

module.exports = router;