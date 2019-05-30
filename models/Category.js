const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

module.exports = Category = mongoose.model('Category', CategorySchema)