const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')

const app = express();


//to be moved
const articles = require('./routes/api/articles')
const authors = require('./routes/api/authors')

app.use(express.json());


const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false);



app.use('/api/articles', articles);
app.use('/api/authors', authors);





const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));