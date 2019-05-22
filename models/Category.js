const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    name: {
        type: String,
        required: false
    }
})

module.exports = Author = mongoose.model('Category', AuthorSchema)