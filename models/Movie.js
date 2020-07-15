const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    genre: {
        type: String,
        required:true

    },
    year: {
        type: String,
        required:true

    },
   
    createdAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
});

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;