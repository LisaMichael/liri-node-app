// use dotenv
require("dotenv").config();


// Include the axios npm package 
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");

var nodeArgs = process.argv;

// "Bands in Town code should go here for "concert-this" code "
// bands in town query url: 
// https://rest.bandsintown.com/artists/+ artist + /events?app_id=codingbootcamp
var userInput = process.argv.splice(3).join(" ");
var task = process.argv[2];


// referenced for loop in wk 10 exercise 18 OMDB_Axios_Students to 
// create loop for movies titles containing mutliple words


switch(task){
case "concert-this":
  bands();
  break;
// case spotify:
//   song();
//   break;
}
function bands(){
var bandQuery = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

axios.get(bandQuery).then(
  function (response) {
    // console.log(response);
    let venuesArray = response.data;
    console.log("Venue: ", response.data[0].venue.name);
    //console.log("Venue: ", JSON.stringify(response.data));
    var temp = response.data[0].datetime.split("T");

    console.log("Venue location: " + response.data[0].venue.city );
    console.log("Venue location: " + temp[0]);
  })
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
}

// spotify code should go here for "spotify-this-song" code "
var spotify = require("node-spotify-api");


// OMDBAPI code should go here for "movie-this" code "
// call movie code here 
// movieQuery();

let movieQuery = (userInput) => {
  
//console log my query url so i can view the response data
// console.log(queryUrl);

// We then run the request with axios module on the URL with a JSON
axios.get(queryUrl).then(
  function (response) {

    

    // Then we print out the response data 
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
//logic for catching errors 
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
} // end of movie() function


// }

//bands in town function code should go here 




// code should go here for "do-what-it-says" code "

//create a switch statement to determine which api is used based upon what the user enters. 
//var userInput = process.argv[2];
// switch(userInput){
//   case concert-this: 
//   console.log("this is concert-this")
// break; 

//   case spotify-this-song: 
// break; 

// case: 

// }

