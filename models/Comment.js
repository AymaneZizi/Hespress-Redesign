const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const CommentSchema = new Schema({
    text: {
        type: String
    },
    article: {
        type: ObjectId,
        ref: 'Article'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Article = mongoose.model('Comment', CommentSchema);