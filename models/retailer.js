const mongoose = require('mongoose');
const User = require('./user');
const Store = require('./store')

//User and Store Connection
const retailer = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    storeId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store'
        }
    ],

});

module.exports = mongoose.model('Retailer', retailer);