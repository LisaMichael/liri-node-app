// use dotenv
require("dotenv").config();


// Include the axios npm package 
var axios = require("axios");

var keys = require("./keys.js");


// "Bands in Town code should go here for "concert-this" code "


// spotify code should go here for "spotify-this-song" code "


// OMDBAPI code should go here for "movie-this" code "

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's Title is: " + response.data.Title);
    console.log("The year of the movie is: " + response.data.Year);
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings);
    console.log("The movie's Language is: " + response.data.Language);
    console.log("The movie's Plot is: " + response.data.Plot);
    console.log("The actors of the movie is: " + response.data.Actors);
    console.log("The country of the movie is: " + response.data.Country);


  }
);


// code should go here for "do-what-it-says" code "

