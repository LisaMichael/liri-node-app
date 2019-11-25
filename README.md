###### AUTHOR: Lisa Michael
###### ROLE: DEVELOPER
###### HW: WK10 
###### LIRI-NODE-APP


In order to meet the Employer Competitive standards and be ready to show your application to employers, the `README.md` file should meet the following criteria:

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

###### INTRODUCTION
In this assignment, I created an application called LIRI. LIRI is simlar to the iPhone's SIRI application.  

While SIRI is an acronym for "Speech Interpretation and Recogition Interface", LIRI is a "Language Interpretation and Recognition Interface".

2. Give a high-level overview of how the app is organized

###### OVERVIEW OF APPLICATION 
LIRI is a Command Line Interface (CLI) application developed using Node.js.

LIRI was developed using NPMs, often referred to the "Node Package Manager". 
The NPMs contained in LIRI include:
* moment - used to modify the date formats 
* Axios - in this application, uses GET http requests to retrieve data
* fs - used to read data from random.txt file
* node-spotify-api - A simple to use API library for the Spotify REST API
* dotenv  : allows is to store environment variables in a .env file

The Axios NPM is used to connect, query, and retrieve data responses using APIs from 3 specific websites:
i) Bandsintown.com 
ii) spotify.com
iii) omdbapi.com (The Open Movie Database)

The response data is then displayed using commands from the command line.


3. Give start-to-finish instructions on how to run the app

## HOW TO USE THE APPLICATION
To run the application, open a command Terminal 
Under the menu options select "Terminal" => "New Terminal Window"

We are going to run one of four commands, depending upon what type output you are searching.

Your options are: 

A) `node liri.js concert-this <name of concert event or artist>`
    
B) `node liri.js spotify-this-song <name of song track>`
    
C) `node liri.js movie-this <title of movie>`
    
D) `node liri.js do-what-it-says` 
    

## OPTION A: Search for concert events 
* * `node liri.js concert-this <name of concert event or artist>`

Example command: 
node liri.js concert-this Taylor Swift 

The command will query the bandsintown.com website.
The response returned back from the "concert-this" CLI will return: 
* Name of the venue
* Venue location
* Date of the Event (using the format this as "MM/DD/YYYY")



## OPTION B: Search for artist on spotify.com
* * `node liri.js spotify-this-song <name of song track>`

Example command: 
node liri.js spotify-this-song Stairway to Heaven

The command will query the spotify.com website.
The response returned back from the "spotify-this-song" CLI will return: 

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

##### NOTE: If no artist name is specified, the default response will display the song "The Sign" by the artist "Ace of Base". 

## OPTION C: Search for movie title using OMDBAPI
* * `node liri.js movie-this <title of movie>`

Example command: 
node liri.js movie this Terminiator

The response returned back from the "movie-this" CLI will return: 

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

###### NOTE: If the user does NOT include a movie name in the command, the CLI will output data for the movie 'Mr. Nobody.'

## OPTION D: Read text from a text file using fs NPM
* * `node liri.js do-what-it-says`

There are no extra parameters needed to use the "do-what-it-says" command.
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
