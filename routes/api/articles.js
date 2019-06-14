const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload')

const Article = require('../../models/Article');
const Category = require('../../models/Category')
const Comment = require('../../models/Comment');
const auth = require('../../middleware/auth');
const User = require('../../models/User');


router.use(fileUpload())


// @route   GET api/articles
// @desc    Get all articles
// @access  Public

router.get('/', (req, res) => {
    let config = {}

    Article.find(config, '-body')
        .then(articles => res.json(articles))
})


// @route   GET api/articles/id
// @desc    Get Specific Article for Editor
// @access  Private


router.get('/edit/:id', (req, res) => {
    Article.findById(req.params.id)
        .populate('category')
        .then(article => {
            res.json(article)
        })
        .catch(err => res.status('404').json({ msg: 'not found' }))
})


// @route   GET api/articles/id
// @desc    Get Specific Article for Reader
// @access  Public

router.get('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
        .then(article => {
            res.json(article)
        })
})

// @route   POST api/articles
// @desc    Add/Update Article
// @access  Private

router.post('/', (req, res) => {
    const { title, body, img, country, date, draft, category } = req.body;

    article = { title, body, country, date, draft, img, category }

    if (req.body.id) {
        Article.findOneAndUpdate({ _id: req.body.id }, article, { upsert: true, new: true, runValidators: false })
            .then(updatedArticle => res.json(updatedArticle))
            .catch(err => res.json(err))
    } else {
        let newArticle = new Article(article)
        newArticle.save().then(article => res.json(article))
    }

});


// @route   DELETE api/articles
// @desc    Delete Article
// @access  Private

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) return;

    Article.findByIdAndDelete(id)
        .then(
            res.json({ msg: 'deleted success' })
        );
})



router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    Comment.find({ article: id })
        .populate('user', 'name')
        .then(comments => {
            res.json(comments)
        })
})

module.exports = router;