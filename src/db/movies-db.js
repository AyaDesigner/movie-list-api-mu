let Movie = require('./models/movie-model');

const saveMovie = async (movie) => {

    const dbMovie = new Movie(movie);

    dbMovie.save(function (err) {
        if (err) { console.error(err) }
    })

}


const deleteAllMovies = async () => {
    Movie.deleteMany()
        .then(movies => console.log(movies))
        .catch(err => console.log('Error: ' + err));
}

const getAllMovies = async (res) => {

    Movie.find()
        .then(movies => res.status(200).json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
}


const searchMovies = async (res, searchKeyword) => {
    console.log(searchKeyword);

    Movie.find({
        $or: [
            { "Title": { "$regex": searchKeyword, "$options": "i" } },
            { "Director": { "$regex": searchKeyword, "$options": "i" } },
            { "Plot": { "$regex": searchKeyword, "$options": "i" } }]
    },
    function (err, movies) {
            if (!err) res.send(movies);
        });
}

module.exports = { saveMovie, deleteAllMovies, getAllMovies, searchMovies };
