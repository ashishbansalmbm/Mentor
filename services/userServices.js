const User = require('../models/user');
const httpStatus = require('http-status-codes');
const logger = require('../logging/logger');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    //Authenticate and Login User
    async loginUser(loginDetails) {
        let result = {};
        try {
            let password = loginDetails.password;
            let verified, user;
            //Checking User 
            if (loginDetails.phone) {
                let username = loginDetails.phone;
                user = await User.findOne({ phone: username }).exec();
                verified = await bcrypt.compare(password, user.password);

            }

            //Create and Assign JSON web token 
            const token = jwt.sign({_id:user.id}, process.env.TOKEN_SECRET);



            //Return Proper Response 
            return result = verified ? { httpStatus: httpStatus.OK, status: "successful", auth_token:token } : { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: httpStatus.getStatusText(httpStatus.BAD_REQUEST) };
        }
        catch (err) {
            logger.error("Error in login user services", { meta: err });
            result = { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: err };
            return result;
        }



    }
}