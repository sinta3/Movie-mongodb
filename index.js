const express = require('express');
const app = express();
const ejs = require('ejs');

const { PORT } = require('./config');
const localPort = PORT || 5005;
const { db } = require('./config');

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
});
app.use('/movies', require('./routes/movies'));

if (db) {
    console.log(`Connected to database`);
    app.listen(localPort, () => {
        console.log(`Server runs on port ${localPort}`);
    });
}