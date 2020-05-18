const mongoose = require('mongoose');


const store = new mongoose.Schema({
    storeName: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    storePhoto: {
        type: String,
        required: true
    },
    storeOwnerPhoto: {
        type: String
    },

    //storeVerificationDocuments:[buisnessDocumentSchema],

    products: [{}],


});

module.exports = mongoose.model('Store', store);