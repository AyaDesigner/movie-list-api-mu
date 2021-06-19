let Movie = require('./models/movie-model');

const saveMovie = async (movie) => {

    const dbMovie = new Movie(movie);

    dbMovie.save(function (err) {
        if (err) { console.error(err) }
    })
}

module.exports = {saveMovie};
