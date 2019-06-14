const express = require('express');
const router = express.Router();


const Category = require('../../models/Category');
const Article = require('../../models/Article')
const auth = require('../../middleware/auth');

// @route   GET api/categories
// @desc    Get all categories
// @access  private

router.get('/', (req, res) => {
    let options = {}
    if (req.query.name) {
        let regex = new RegExp(req.query.name);
        options['name'] = { $regex: regex }
    }

    if (req.query.id) {
        console.log(req.query.id)
        options['_id'] = { $in: req.query.id }
    }

    Category.find(options)
        .then(categories => {
            res.json(categories)
        })
})

// @route   GET api/articles/id
// @desc    Get Specific Article for Reader
// @access  private

router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(category => res.json(category))
})

// @route   POST api/articles
// @desc    Add/Update category
// @access  Private

router.post('/', (req, res) => {
    const { name, icon, color } = req.body;
    console.log(req.body);

    let category = new Category({ name, icon, color })
    category.save()
        .then(category => res.json(category))
        .catch(err => res.status(500).json(err))
});


router.get('/:name/articles', (req, res) => {
    console.log(req.params.name)
    Category.findOne({ name: req.params.name })
        .then(Category => {
            Article.find({ category: Category._id })
                .then(articles => res.json(articles))
        })
})


module.exports = router;