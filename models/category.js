const mongoose = require('mongoose');

const category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store'
    }
})

const subCategory = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }

})

const customizations = new mongoose.Schema({
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    attribute: {
        type: String
    }
})

module.exports = {
    Category: mongoose.model('Category', category),
    SubCategory: mongoose.model('SubCategory', subCategory),
    Customization: mongoose.model('Customizations', customizations)

}
