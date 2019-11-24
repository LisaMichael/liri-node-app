// use dotenv
require("dotenv").config();


// declare npm packages 
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var spotify = require("node-spotify-api");

var nodeArgs = process.argv;


var userInput = process.argv.splice(3).join(" ");
var task = process.argv[2];



// switch statement where i am calling different functions which call the apis used

switch (task) {
  case "concert-this":
    bands();
    break;

  case "spotify-this-song":
    song();
    break;

  case "movie-this":
    movieQuery();
    break;

}



// "Bands in Town code should go here for "concert-this" code "
// bands in town query url: 
// https://rest.bandsintown.com/artists/+ artist + /events?app_id=codingbootcamp

function bands() {


  var bandQuery = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"

  axios.get(bandQuery).then(
    function (response) {
      // console.log(response);
      let venuesArray = response.data;
      console.log("Venue: ", response.data[0].venue.name);
      //console.log("Venue: ", JSON.stringify(response.data));
      var temp = response.data[0].datetime.split("T");

      console.log("Venue location: " + response.data[0].venue.city);
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
// code placed in band() function 

function song() {


  // this code was taken from example listed on https://www.npmjs.com/package/node-spotify-api
  spotify.search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });

} // end of band() function 



// OMDBAPI code should go here for "movie-this" code "
// call movie code here 
// movieQuery();

function movieQuery() {

  // if userput for movie-this is blank, default to Mr. Nobody.
  if (userInput === "") {
    var queryUrl =  "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy"
    console.log(" * If you haven't watched \"Mr. Nobody,\" then you should: <http://www.imdb.com/title/tt0485947/>");

    console.log(" * It's on Netflix!")
  }
  else {

  // api response string for omdb api 
  var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy"
  }
  //console log my query url so i can view the response data
  // console.log(queryUrl);

  // We then run the get request with axios module on the URL 
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

