const express = require('express');
const router = express.Router();
const verify = require('../authentication/verifyJwtToken');
const Store = require('../models/store');

router.post('/add', async (req, res) => {
    let store = await Store.findById(req.body.storeId);
    store.products.push(req.body.product);
    store.save();
    return res.send("Product Added successfully");
})

module.exports = router;