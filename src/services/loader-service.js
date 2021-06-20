const movieDB = require('../db/movies-db');
const omdbClient = require('../clients/http/omdb-client');


const loadMoviesIntoDB = async () => {

    movieDB.deleteAllMovies();


    let pageCounter = 1;
    let continueLoad = true;

    //Loop until there are no more pages available
    while (continueLoad) {
        //Get all movies
        const moviesSearchResult = await omdbClient.getMovies(pageCounter);
        // Filter by year
        const moviesFilteredByYear = moviesSearchResult.filter(movie => (parseInt(movie.Year) >= 2001 ));
        // Get movies Details
        const moviesDetails = await Promise.all(moviesFilteredByYear.map(async (movie) => { return await omdbClient.getMovieDetailsById(movie.imdbID) }));
        // Save movies in the DB
        moviesDetails.forEach(movie => movieDB.saveMovie(movie));

        console.log("Movies loaded : " + moviesSearchResult.length);

        pageCounter++;
        if (moviesSearchResult.length < 10) {
            continueLoad = false;
        }
    }
}


const moviesAlreadyLoadedInDB = async () => {
    return getAllMovies.length > 0;
}


const getAllMovies = async (res) => {
    movieDB.getAllMovies(res);
}





module.exports = { loadMoviesIntoDB, getAllMovies, moviesAlreadyLoadedInDB };