const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');


module.exports = 
    function (req, res, next) {
        const token = req.header('auth_token');
        if (!token) return res.status(httpStatus.UNAUTHORIZED).send(httpStatus.getStatusText(httpStatus.UNAUTHORIZED));

        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        }
        catch (err) {
            res.status(httpStatus.BAD_REQUEST).send(httpStatus.getStatusText(httpStatus.BAD_REQUEST));
        }
    }


