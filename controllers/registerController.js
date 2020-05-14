const registerServices = require('../services/registerServices');

module.exports = {
    async createUser(req, res, next) {
        let response;
        try {
            response = await registerServices.createUser(req.body);
            return res.send(response);
        }
        catch (err) {
            //log error in controller
            return res.send(err);
        }
    }
}