const mongoose = require('mongoose');


//User Details Used For Registration
const userSchema = new mongoose.Schema({
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
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
    photo: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    referral_token: {
        type: String,
    },
    emailConfirmationToken: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    // addresses: {
    //     addressSchema
    // }

});

module.exports = mongoose.model('User', userSchema);