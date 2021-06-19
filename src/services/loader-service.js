const movieDB = require('../db/movies-db');
const omdbClient = require('../clients/http/omdb-client');


const loadMoviesIntoDB = async () => {
    let pageCounter = 1;
    let continueLoad = true;
    while (continueLoad) {
        const moviesSearchResult = await omdbClient.searchMovies(pageCounter);
        const moviesFilteredByYear = moviesSearchResult.filter(movie => parseInt(movie.Year) >= 2001);
        const moviesDetails = await Promise.all(moviesFilteredByYear.map(async (movie) => { return await omdbClient.getMovieDetailsById(movie.imdbID) }));

        moviesDetails.forEach(movie => movieDB.saveMovie(movie));

        pageCounter++;
        if (moviesSearchResult.length < 10) {
            continueLoad = false;
        }
        console.log(moviesDetails);
    }
}



module.exports = loadMoviesIntoDB;