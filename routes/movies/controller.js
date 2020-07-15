const { Movie } = require('../../models');
const { set } = require('mongoose');

const routes = {
   postMovie: async (req, res) => {
        const { title , genre , year } = req.body;

        try {
            const movie = await Movie.create({
               title:title,
               genre:genre,
               year:year,
            });

            res.send({
                message: `complete`,
                result: movie,
            });
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    getMovie: async (req, res) => {
        
        try {
            const movie = await Movie.find();

            res.send({
                message: `complete`,
                result: movie,
            });
        } catch (error) {
           console.log(error)
        }
    },
    getMovieGenre: async (req, res) => {
        const {genre} = req.params;
        try {
            const movie = await Movie.find({
                
                    genre:genre,
                
            });

            res.send({
                message: `complete`,
                result: movie,
            });
        } catch (error) {
           console.log(error)
        }
    },
    deleteMovie: async (req, res) => {
        const {id} = req.params;
        try {
            const movie = await Movie.findByIdAndDelete({
                _id:id,
            });

            const results = await Movie.find();
            res.send({
                message: `complete`,
                result: results,
            });
        } catch (error) {
           console.log(error)
        }
    },
    getUpdate: async(req,res) => {

        const {id} = req.params;
        try {
            const movie = await Movie.findByIdAndUpdate(id,{
                $set: {
                  ...req.body
            }
        });

            res.send({
                message: `complete`,
                result: movie,
            });
        } catch (error) {
           console.log(error)
        }
    }
};

module.exports = routes;