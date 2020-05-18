const express = require("express");
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/user', registerController.createUser);
router.post('/retailer', registerController.createRetailer);




module.exports = router;