const User = require('../models/user');

module.exports = {
    async createUser(userDataObj) {
        let result = {};
        try {
            //Checking For New User
            let phone = await User.findOne({ phone: userDataObj.phone }).exec();
            //console.log(userDataObj);
            //If user is registered Earlier do not go ahead 
                   
            if (!phone) {
                var user = new User({
                    firstName: userDataObj.firstName,
                    lastName: userDataObj.lastName,
                    password: userDataObj.password,
                    email: userDataObj.email,
                    photo: userDataObj.photo,
                    referral_token: userDataObj.referral_token,
                    phone: userDataObj.phone

                });
                user = await user.save();
            }

            

            //Return Proper Response
            result = user ? { status: "successful" } : { status: "failed" };
            return result;


        }
        catch (err) {
            //Log the error
            result = { err };
            return result;

        }

    }
}