const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload')

const Article = require('../../models/Article');

router.use(fileUpload())


const upload_image = (req, res, file_name) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files[file_name];

    //todo : check mime type before save
    file.mv(`${__dirname}/../../client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ msg: "Internal Sever Error" });
        }
    });
    return (`/uploads/${file.name}`)
}


//Get Articles

router.get('/', (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
})

//Add Article

router.post('/', (req, res) => {
    article = new Article();
    article.save()
        .then(article => res.json(article))
});

//Update Article 
router.put('/', (req, res) => {
    const image = upload_image(req, res, 'img')
    article = {
        title: req.body.title,
        body: req.body.body,
        img: image,
        country: req.body.country,
        date: req.body.date
    }
    Article.findOneAndUpdate({ _id: req.body.id }, article)
        .then(updatedArticle => res.json(updatedArticle))
})


router.delete('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(res.json({ succes: true }))
        .catch(err => res.status(404).json({ succes: false }))
})

module.exports = router;