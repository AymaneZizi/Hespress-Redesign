const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload')
const fs = require('fs')

router.use(fileUpload())

router.post('/', (req, res) => {
    console.log("image upload")
    if (req.files == null) {
        console.log("no file is uploaded")
        return res.status(501).json({ msg: 'no file uploaded' })
    }

    const file = req.files['img'];
    file.mv(`client/public/uploads/${file.name}`, err => {
        if (err) return res.status(501).json({ msg: 'Internal Server Error' })

        res.json({ img: `/uploads/${file.name}` })
    })
})

router.delete('/', (req, res) => {
    fs.unlink('client/public' + req.body.img, function (err) {
        if (err) return res.json({ msg: 'Internal Server Error' })
        res.json({ msg: "Image deleted" })
    });
})


router.get('/', (req, res) => {
    res.json({ msg: 'hello' })
})

module.exports = router;