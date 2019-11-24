###### AUTHOR: Lisa Michael
## HW: WK10 
###### LIRI


In order to meet the Employer Competitive standards and be ready to show your application to employers, the `README.md` file should meet the following criteria:

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

###### INTRODUCTION
In this assignment, I created an application called LIRI. LIRI is simlar to the iPhone's SIRI application.  

While SIRI is an acronym for "Speech Interpretation and Recogition Interface", LIRI is a "Language Interpretation and Recognition Interface".

2. Give a high-level overview of how the app is organized

###### OVERVIEW OF APPLICATION 
LIRI is a Command Line Interface (CLI) application developed using Node.js.

LIRI was developed using NPMs, often referred to the "Node Package Manager". The NPMs contained in LIRI include: moment.js, Axios, fs and node-spotify-api. 

The Axios NPM is used to connect, query, and retrieve data responses using APIs from 3 specific websites:
i) Bandsintown.com 
ii) spotify.com
iii) omdbapi.com (The Open Movie Database)

The response data is then displayed using commands from the command line.


3. Give start-to-finish instructions on how to run the app

###### HOW TO USE THE APPLICATION
To run the application, open a command Terminal 
Under the menu options select "Terminal" => "New Terminal Window"

We are going to run one of four commands, depending upon what type output you are searching.

Your options are: 

A) node liri.js concert-this <name of concert event or artist>
    
B) node liri.js spotify-this-song <name of song track>
    
C) node liri.js movie-this <title of movie>
    
D) node liri.js do-what-it-says 
    

###### OPTION A: node liri.js concert-this <name of concert event or artist>

Example command: 
node liri.js concert-this Taylor Swift 

The command will query the bandsintown.com website.
The response returned back from the "concert-this" CLI will return: 
* Name of the venue
* Venue location
* Date of the Event (using the format this as "MM/DD/YYYY")

NOTE: If no artist name is specified, the default response will display the song "The Sign" by the artist "Ace of Base".

###### OPTION B: node liri.js spotify-this-song <name of song track>

Example command: 
node liri.js spotify-this-song Stairway to Heaven

The command will query the spotify.com website.

The response returned back from the "spotify-this-song" CLI will return: 

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

###### OPTION C: node liri.js movie-this <title of movie>

###### OPTION D: node liri.js do-what-it-says 

4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development