const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verify = require('../authentication/verifyJwtToken');
const Store = require('../models/store');


// router.get('/test', verify, (req, res) => {
//     console.log(req.user._id);
    
// });


router.post('/', async (req, res) => {
    let store = await Store.create({
        storeName: req.body.storeName,
        contactPerson: req.body.contactPerson,
        contactNumber: req.body.contactNumber,
        storePhoto: req.body.storePhoto,
        storeOwnerPhoto: req.body.storeOwnerPhoto,
    })
    console.log(store);
    store.products.push(req.body.product);
    store.save();
    console.log(store);
})

router.post('/login', userController.loginUser);

module.exports = router;