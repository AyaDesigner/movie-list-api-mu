var express = require('express');
var router = express.Router();
const loadMoviesIntoDB = require('../services/loader-service');



let Movie = require('../db/models/movie-model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.status(200).json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').get((req, res) => {
  Movie.deleteMany()
    .then(movies => res.status(200).json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/load').get((req, res) => {
  loadMoviesIntoDB();
  res.send("ok");
});






module.exports = router;
