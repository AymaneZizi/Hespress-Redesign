const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const ArticleSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    country: {
        type: String
    },
    author: {
        type: ObjectId,
        ref: 'Author'
    },
    img: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now
    },
    draft: {
        type: Boolean,
        default: false
    }
})

module.exports = Article = mongoose.model('Article', ArticleSchema);