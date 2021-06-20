const movieDB = require('../db/movies-db');


const searchMovies = async (res, searchKeyword) => {
    movieDB.searchMovies(res, searchKeyword);
}



module.exports = { searchMovies };