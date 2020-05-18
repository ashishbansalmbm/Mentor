const User = require('../models/user');
const Retailer = require('../models/retailer');
const Store = require('../models/store');
const bcrypt = require('bcryptjs');
const httpStatus = require('http-status-codes');
const logger = require('../logging/logger');

module.exports = {
    async createUser(userDataObj) {
        let result = {};
        try {
            //Checking For New User
            let phone = await User.findOne({ phone: userDataObj.phone }).exec();
            //console.log(userDataObj);

            let salt = await bcrypt.genSalt(10);
            let user;

            if (!phone) {
                let hash = await bcrypt.hash(userDataObj.password, salt);
                user = new User({
                    firstName: userDataObj.firstName,
                    lastName: userDataObj.lastName,
                    password: hash,
                    email: userDataObj.email,
                    photo: userDataObj.photo,
                    referral_token: userDataObj.referral_token,
                    phone: userDataObj.phone

                });
                user = await user.save();
            }
            //If user is registered Earlier do not go ahead 
            else {
                return result = { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: "User already exists" };
            }



            //Return Proper Response
            return result = user ? { httpStatus: httpStatus.OK, status: "successful", responseData: user._id } : { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: httpStatus.getStatusText(httpStatus.BAD_REQUEST) };


        }
        catch (err) {
            logger.error("Error in create user services", { meta: err });
            result = { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: err };
            return result;

        }

    },
    async createRetailer(DataObj) {
        let result = {};
        try {
             
                
            //Add store Id to Retailer's user ID


            //Return Proper Response
            return result = user ? { httpStatus: httpStatus.OK, status: "successful", responseData: user._id } : { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: httpStatus.getStatusText(httpStatus.BAD_REQUEST) };


        }
        catch (err) {
            logger.error("Error in create retailer services", { meta: err });
            result = { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: err };
            return result;

        }

    },

    async createRetailerStore(DataObj) {
        let result = {};
        try {
             
                
            //Create Store and make entry in Retailer-Store Table



            //Return Proper Response
            return result = user ? { httpStatus: httpStatus.OK, status: "successful", responseData: user._id } : { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: httpStatus.getStatusText(httpStatus.BAD_REQUEST) };


        }
        catch (err) {
            logger.error("Error in create retailer services", { meta: err });
            result = { httpStatus: httpStatus.BAD_REQUEST, status: "failed", errorDetails: err };
            return result;

        }

    }
}