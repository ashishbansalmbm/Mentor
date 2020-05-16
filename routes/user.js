const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verify = require('../authentication/verifyJwtToken');


router.get('/', verify, (req,res) => {
    res.send("user home");
})

router.post('/login', userController.loginUser);

module.exports = router;