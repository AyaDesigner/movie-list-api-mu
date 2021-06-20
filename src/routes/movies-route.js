const express = require('express');
const router = express.Router();
const {loadMoviesIntoDB, getAllMovies} = require('../services/loader-service');



router.route('/').get((req, res) => {
  getAllMovies(res);
});


router.route('/reload').get((req, res) => {
  loadMoviesIntoDB();
  res.status(200).send("Loading...");
});





module.exports = router;
