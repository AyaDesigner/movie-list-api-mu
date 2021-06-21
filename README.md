# Node.js Movies list app

[![Node.js Awesome](https://img.shields.io/badge/nodejs-awesome-%23783578.svg)](http://react.io)
[![MongoDB Mongoose](https://img.shields.io/badge/mongodb-mongoose-%55FF33.svg)](http://react.io)


> ### Server app for [Movies list app API](https://github.com/AyaDesigner/movie-list-client-mu)


## Server

Server is deployed on [Heroku](https://agile-island-00923.herokuapp.com/)&nbsp;&nbsp;&nbsp;&nbsp;

## Database 

Database is created on [MongoDB Atlas Cloud](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_emea_germany_search_brand_atlas_desktop&utm_term=mongodb%20cluster&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986504&gclid=CjwKCAjw8cCGBhB6EiwAgORey15jVLNLeBbuyrOeItAV0njkyl8tf7FeNndjWQ_koNUxnVs0A_DBhRoC-FsQAvD_BwE)

---

## Install

    $ git clone https://github.com/AyaDesigner/movie-list-api-mu
    $ cd movie-list-api-mu
    $ npm install

## Configure app

Create `.env` file in the root folder of the project. Then edit it with your settings. You will need:

- OMDB_API_KEY = Your OMDB api key
- MONGODB_URI = Mongo db url

## Running the project

    $ npm start


## Run the tests

    $ npm test

# REST API

The REST API to the example app is described below.

## Get list of movies saved in database

### Request 

`GET/movies/`

    curl -i -H 'Accept: application/json' https://agile-island-00923.herokuapp.com/movies

### Response

    HTTP/1.1 200 OK
    Server: Cowboy
    Connection: keep-alive
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 3596
    Etag: W/"e0c-1VUapPDHsZmDz7kNNETPlb8WZfk"
    Date: Mon, 21 Jun 2021 17:21:13 GMT
    Via: 1.1 vegur
    
```json
  [
  {
    "_id": "60d07b5becdd3300220a6a87",
    "imdbID": "tt0808240",
    "Title": "Turks in Space",
    "Director": "Kartal Tibet",
    "Plot": "A family of Turks try to adapt to life in a new solar system.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTMwODIxNF5BMl5BanBnXkFtZTcwMjc0NzA0MQ@@._V1_SX300.jpg",
    "createdAt": "2021-06-21T11:43:23.651Z",
    "updatedAt": "2021-06-21T11:43:23.651Z",
    "__v": 0
  },
  {
    "_id": "60d07b5becdd3300220a6a88",
    "imdbID": "tt0482603",
    "Title": "Space Chimps",
    "Director": "Kirk DeMicco",
    "Plot": "Three chimps are sent into space to explore the possibility of alien life when an unmanned space shuttle crash lands on an uncharted planet.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDU0MDY1OTQzOV5BMl5BanBnXkFtZTcwNzQ3ODI3MQ@@._V1_SX300.jpg",
    "createdAt": "2021-06-21T11:43:23.652Z",
    "updatedAt": "2021-06-21T11:43:23.652Z",
    "__v": 0
  },
  ...]
```
  
  
## Reload the database with the result from OMDB request 

(caution: to be used only in case of emergency, omdb has a limit of 1000 request per day)

### Request 

`GET/movies/reload`

    curl -i -H 'Accept: application/json' https://agile-island-00923.herokuapp.com/movies/reload

### Response

    HTTP/1.1 200 OK
    Server: Cowboy
    Connection: keep-alive
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 3596
    Etag: W/"e0c-1VUapPDHsZmDz7kNNETPlb8WZfk"
    Date: Mon, 21 Jun 202
  
   
## Search movies by keyword 

(keyword can be in the movie's title, director's name or movie's plot)

### Request 

`GET/search`

    curl -i -H 'Accept: application/json' https://agile-island-00923.herokuapp.com/search?searchKeyword=<KEYWORD>

### Response

    HTTP/1.1 200 OK
    Server: Cowboy
    Connection: keep-alive
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 3596
    Etag: W/"e0c-1VUapPDHsZmDz7kNNETPlb8WZfk"
    Date: Mon, 21 Jun 202
   

```json
[
  {
    "_id": "60ce21f12cf4d143ba8bb2ff",
    "imdbID": "tt2632184",
    "Title": "Super Hero Taisen Z: Kamen Rider vs. Super Sentai vs. Space Sheriff",
    "Director": "Osamu Kaneda",
    "Plot": "A new evil organization known as Space Shocker, which are led by the magic-using Space Ikadevil and Space Spider Man, threatens the Earth by causing an unknown phenomenon. The Space ...",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2Y5YTEwNTQtYjI2MC00YzRhLWIwMTktYmJkNmFmYWMyN2QyXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_SX300.jpg",
    "createdAt": "2021-06-19T16:57:21.004Z",
    "updatedAt": "2021-06-19T16:57:21.004Z",
    "__v": 0
  }
]
```
  

### Project architecture choices 

* Separation of business logic from the API routes 
* Separation of business logic from the database access 
* Services layer usage
* Using another layer for third-party services calls
* Unit test 
* Promises usage

### Coming next (a.k.a with more time available)

* Add unit tests (only omdb-client test has been created) for each service and route
* Better handling of the errors 
* Add filtering and pagination when returning movies

