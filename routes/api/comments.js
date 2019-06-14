const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const Comment = require('../../models/Comment');


// @route   POST api/comments
// @desc    Add Comment
// @access  Private

router.post('/', auth, (req, res) => {
    const user = req.user;
    const { text, article } = req.body;

    const comment = new Comment({ user: user.id, text, article })
    comment.save()
        .then(comment => {
            Comment.populate(comment, 'user', (err, comment) => { res.json(comment) })

        })
        .catch(err => res.status(500).json(err))
})




module.exports = router;