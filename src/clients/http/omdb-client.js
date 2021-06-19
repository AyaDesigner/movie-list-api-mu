require('dotenv').config();

const axios = require('axios');
const API_KEY = process.env.API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
const SEARCH_KEYWORD = "space";


const searchMovies = async (pageCounter) => {
    try {
        const response = await axios.get(`${API_URL}&s=${SEARCH_KEYWORD}&page=${pageCounter}`);
        return response.data.Search;
    } catch (err) {
        console.error(err);
    }
}


const getMovieDetailsById = async (movieId) => {
    try {
        const response = await axios.get(`${API_URL}&i=${movieId}`);
        const movieDetails = {
            "imdbID": movieId,
            "Title": response.data.Title,
            "Director": response.data.Director,
            "Plot": response.data.Plot,
            "Poster": response.data.Poster
        }
        return movieDetails;
    } catch (err) {
        console.error(err);
    }
};

module.exports = { searchMovies, getMovieDetailsById };







