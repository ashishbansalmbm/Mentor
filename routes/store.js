const express = require('express');
const router = express.Router();
const Store = require('../models/store');
const Retailer = require('../models/retailer');
const verify = require('../authentication/verifyJwtToken');


//Add Store
router.post('/', verify, async (req, res) => {
    let store = await Store.create({
        storeName: req.body.storeName,
        contactPerson: req.body.contactPerson,
        contactNumber: req.body.contactNumber,
        storePhoto: req.body.storePhoto,
        storeOwnerPhoto: req.body.storeOwnerPhoto,
    })
    let retailer = await Retailer.findOne({userId:req.user._id});

    if(!retailer){
        await Retailer.create({
            storeId: store._id,
            userId:req.user._id
        })
    }
    else{
        retailer.storeId.push(store._id);
        retailer.save();
    
    }   
    return res.send(store);
});

module.exports = router;
