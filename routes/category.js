const express = require('express');
const router = express.Router();
const verify = require('../authentication/verifyJwtToken');
const { Category } = require('../models/category');
const { SubCategory } = require('../models/category');
const { Customization } = require('../models/category');



//Add Category
router.post('/add', async (req, res) => {
    const category = await Category.create({
        name: req.body.name
    })
    return res.send(category);
})

//Add Sub Category
router.post('/add/sub-category', async (req, res) => {

    let categoryName = req.body.categoryName;
    let categoryId = await Category.findOne({ name: categoryName });
    if (categoryId) {
        let subcategory = await SubCategory.create({
            name: req.body.name,
            categoryId: categoryId._id
        })
        return res.send(categoryId);
    }
    else {
        console.log('Category Not found');
        return res.send("Category Not found");
    }
})

//Add Customization
router.post('/add/customization', async (req, res) => {

    let subCategoryName = req.body.subCategoryName;
    let subCategoryId = await SubCategory.findOne({ name: subCategoryName });
    if (subCategoryId) {
        let customization = await Customization.create({
            attribute: req.body.attribute,
            subCategoryId: subCategoryId._id
        })
        return res.send(customization);
    }
    else {
        console.log('Sub-Category Not found');
        return res.send("Sub-Category Not found");
    }
})



module.exports = router;