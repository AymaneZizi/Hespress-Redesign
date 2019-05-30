const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload')
const fs = require('fs')

router.use(fileUpload())

router.post('/', (req, res) => {
    if (req.files == null) res.status(501).json({ msg: 'no file uploaded' })

    const file = req.files['img'];
    file.mv(`client/public/uploads/${file.name}`, err => {
        if (err) res.status(501).json({ msg: 'Internal Server Error' })

        res.json({ img: `/uploads/${file.name}` })
    })
})

router.delete('/', (req, res) => {
    console.log(req.body)
    fs.unlink('client/public' + req.body.img, function (err) {
        if (err) res.status(501).json({ msg: 'Internal Server Error' })
        res.json({ msg: "Image deleted" })
    });
})


router.get('/', (req, res) => {
    res.json({ msg: 'hello' })
})

module.exports = router;