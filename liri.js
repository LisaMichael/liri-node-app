// use dotenv
require("dotenv").config();


// Include the axios npm package 
var axios = require("axios")
var keys = require("./keys.js");
var fs = require("fs");

// "Bands in Town code should go here for "concert-this" code "




// spotify code should go here for "spotify-this-song" code "
var spotify = require("node-spotify-api");


// OMDBAPI code should go here for "movie-this" code "

var nodeArgs = process.argv;

// var movie=process.argv[2];

let movieName = "";


// referenced for loop in wk 10 exercise 18 OMDB_Axios_Students to 
// create loop for movies titles containing mutliple words

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

console.log(queryUrl);
// We then run the request with axios module on a URL with a JSON
axios.get(queryUrl).then(
  function (response) {

    // console.log(response);

    // Then we print out the imdbRating
    console.log("The movie's Title is: " + response.data.Title);
    console.log("The year of the movie is: " + response.data.Year);
    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
    console.log("The movie's Country of origin is: " + response.data.Country);
    console.log("The movie's Language is: " + response.data.Language);
    console.log("The plot of the movie is: " + response.data.Plot);
    console.log("The movie actors are: " + response.data.Actors);
  }
)
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });


// code should go here for "do-what-it-says" code "

