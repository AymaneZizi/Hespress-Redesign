const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Author = mongoose.model('Author', AuthorSchema)