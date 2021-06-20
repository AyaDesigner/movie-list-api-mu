const express = require('express');
const router = express.Router();
const { searchMovies } = require('../services/search-service');




router.route('/').get((req, res) => {
  searchMovies(res, req.query.searchKeyword)   
});



module.exports = router;