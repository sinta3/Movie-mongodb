const mongoose = require('mongoose');

const { MONGODB_URI_LIVE } = require('./environment');

mongoose.connect(MONGODB_URI_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;