const express = require('express');
const router = express.Router();


const Author = require('../../models/Author');

router.get('/', (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
})

router.post('/', (req, res) => {
    const newAuthor = new Author({
        name: req.body.name
    });
    newAuthor.save().then(author => res.json(author))
})

router.delete('/:id', (req, res) => {
    Author.findByIdAndDelete()
})

module.exports = router;