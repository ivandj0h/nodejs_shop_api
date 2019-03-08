const mongoose = require('mongoose');

// Create Schema Method using Mongoose
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});


module.exports = mongoose.model('Product', productSchema);