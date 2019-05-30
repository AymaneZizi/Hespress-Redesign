const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const config = require('config')

const app = express();



//to be moved
const articles = require('./routes/api/articles')
const authors = require('./routes/api/authors')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const images = require('./routes/api/images')

app.use(express.json());


const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false);



app.use('/api/articles', articles);
app.use('/api/authors', authors);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/images', images);





const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));