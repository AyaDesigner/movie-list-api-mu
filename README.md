# Node.js Movies list app

[![Node.js Awesome](https://img.shields.io/badge/nodejs-awesome-%23783578.svg)](http://react.io)
[![MongoDB Mongoose](https://img.shields.io/badge/mongodb-mongoose-%55FF33.svg)](http://react.io)


> ### Server app for [Movies list app API](https://github.com/AyaDesigner/movie-list-client-mu)


### [Demo](https://distracted-pare-feb384.netlify.app/)&nbsp;&nbsp;&nbsp;&nbsp;

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/AyaDesigner/movie-list-api-mu
    $ cd movie-list-api-mu
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ npm start

## Simple build for production

    $ npm build


## Run the tests

   ///

# REST API

The REST API to the example app is described below.

## Get list of movies

### Request

`GET/movies/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []
