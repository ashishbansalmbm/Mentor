const mongoose = require('mongoose');
const schema = mongoose.Schema();

//Delivery Address Details
const addressSchema = new schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true,
        enum: ['United States of America', 'Bangladesh', 'Nepal']
    },
    phone: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.schema('Address', addressSchema);