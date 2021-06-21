require('dotenv').config();
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;
const SEARCH_KEYWORD = "space";


const omdbClient = require('../../../clients/http/omdb-client');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');



describe('getMovies', () => {


    it('return 0 movies', done => {

        // configuration for this test
        const mockAxios = new MockAdapter(axios);
        const moviesFromOmdbAPI = { Search: [] };
        const pageCounter = 1;
        mockAxios.onGet(`${OMDB_API_URL}&s=${SEARCH_KEYWORD}&page=${pageCounter}`).reply(200, moviesFromOmdbAPI);

        // execute test
        omdbClient.getMovies(1).then(response => {
            expect(response).toEqual([]);
            done();
        });
    }),



        it('return 1 movie', done => {

            // configuration for this test
            const mockAxios = new MockAdapter(axios);
            const movieObjSample = {
                "Title": "2001: A Space Odyssey",
                "Year": "1968",
                "imdbID": "tt0062622",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            }
            const moviesFromOmdbAPI = {
                Search: [movieObjSample]
            };
            const pageCounter = 1;
            mockAxios.onGet(`${OMDB_API_URL}&s=${SEARCH_KEYWORD}&page=${pageCounter}`).reply(200, moviesFromOmdbAPI);

            // execute test
            omdbClient.getMovies(1).then(response => {
                expect(response).toEqual([movieObjSample]);
                done();
            });
        }),



        it('return full page of movies', done => {

            // configuration for this test
            const mockAxios = new MockAdapter(axios);
            const movieObjSample = {
                "Title": "2001: A Space Odyssey",
                "Year": "1968",
                "imdbID": "tt0062622",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            }
            const moviesFromOmdbAPI = {
                Search: [movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample]
            };
            const pageCounter = 1;
            mockAxios.onGet(`${OMDB_API_URL}&s=${SEARCH_KEYWORD}&page=${pageCounter}`).reply(200, moviesFromOmdbAPI);

            // execute test
            omdbClient.getMovies(1).then(response => {
                expect(response).toEqual([movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample, movieObjSample]);
                done();
            });
        });


});


describe('getMovieDetailsById', () => {



    it('get details for 1 movie', done => {

        // configuration for this test
        const movieId = "tt0062622";

        const mockAxios = new MockAdapter(axios);
        const movieObjSample = {
            "Title": "2001: A Space Odyssey",
            "Year": "1968",
            "Rated": "G",
            "Released": "24 Jun 1970",
            "Runtime": "149 min",
            "Genre": "Adventure, Sci-Fi",
            "Director": "Stanley Kubrick",
            "Writer": "Stanley Kubrick, Arthur C. Clarke",
            "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
            "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
            "Language": "English, Russian, French",
            "Country": "United Kingdom, United States",
            "Awards": "Won 1 Oscar. 16 wins & 11 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "92%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "84/100"
                }
            ],
            "Metascore": "84",
            "imdbRating": "8.3",
            "imdbVotes": "616,441",
            "imdbID": movieId,
            "Type": "movie",
            "DVD": "06 Feb 2014",
            "BoxOffice": "$60,405,931",
            "Production": "Metro Goldwyn Mayer",
            "Website": "N/A",
            "Response": "True"
        }



        const expectedMovieDetails = {
            "imdbID": movieId,
            "Title": "2001: A Space Odyssey",
            "Director": "Stanley Kubrick",
            "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }

        mockAxios.onGet(`${OMDB_API_URL}&i=${movieId}`).reply(200, movieObjSample);

        // execute test
        omdbClient.getMovieDetailsById(movieId).then(response => {
            expect(response).toEqual(expectedMovieDetails);
            done();
        });
    }),



        it('get details for 1 movie with "N/A" properties', done => {

            // configuration for this test
            const movieId = "tt0062622";

            const mockAxios = new MockAdapter(axios);
            const movieObjSample = {
                "Title": "N/A",
                "Year": "1968",
                "Rated": "G",
                "Released": "24 Jun 1970",
                "Runtime": "149 min",
                "Genre": "Adventure, Sci-Fi",
                "Director": "N/A",
                "Writer": "Stanley Kubrick, Arthur C. Clarke",
                "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
                "Plot": "N/A",
                "Language": "English, Russian, French",
                "Country": "United Kingdom, United States",
                "Awards": "Won 1 Oscar. 16 wins & 11 nominations total",
                "Poster": "N/A",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.3/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "92%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "84/100"
                    }
                ],
                "Metascore": "84",
                "imdbRating": "8.3",
                "imdbVotes": "616,441",
                "imdbID": movieId,
                "Type": "movie",
                "DVD": "06 Feb 2014",
                "BoxOffice": "$60,405,931",
                "Production": "Metro Goldwyn Mayer",
                "Website": "N/A",
                "Response": "True"
            }



            const expectedMovieDetails = {
                "imdbID": movieId,
                "Title": "",
                "Director": "",
                "Plot": "",
                "Poster": ""
            }

            mockAxios.onGet(`${OMDB_API_URL}&i=${movieId}`).reply(200, movieObjSample);

            // execute test
            omdbClient.getMovieDetailsById(movieId).then(response => {
                expect(response).toEqual(expectedMovieDetails);
                done();
            });
        });


});

