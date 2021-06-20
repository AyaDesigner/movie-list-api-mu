
const mongoose = require('mongoose');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const moviesRouter = require('../routes/movies-route');
const searchRouter = require('../routes/search-route');
const {loadMoviesIntoDB, moviesAlreadyLoadedInDB} = require('../services/loader-service');




const app = express();
app.use(cors());


const router = express.Router();

require('dotenv').config();


// env variables
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
   () => {console.log("Mongodb database connection established successfully.")});




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/movies', moviesRouter);
app.use('/search', searchRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if(!moviesAlreadyLoadedInDB()){
  loadMoviesIntoDB();
}

module.exports = app;