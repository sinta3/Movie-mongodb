const express = require('express');
const router = express.Router();

const routes = require('./controller');

router.post('/', routes.postMovie);
router.get('/', routes.getMovie);
router.put('/:id',routes.getUpdate);
router.get('/:genre', routes.getMovieGenre);
router.delete('/:id', routes.deleteMovie);


module.exports = router;