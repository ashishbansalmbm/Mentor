const userServices = require('../services/userServices');
const httpStatus = require('http-status-codes');
const logger = require('../logging/logger');

module.exports = {
    async loginUser(req, res, next) {
        let response;
        try {
            response = await userServices.loginUser(req.body);
            return res.header(response.auth_token).status(response.httpStatus).send(response);
        }
        catch (err) {
            logger.error("Error in login User Controller", {meta:err});
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({httpStatus:httpStatus.INTERNAL_SERVER_ERROR, status:"failed", errorDetails:err});
        }
    }
}