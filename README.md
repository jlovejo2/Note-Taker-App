## Note Taker: 
Create an app that allows the user to write, save, delete and view past notes.

the link to github is shown below:
https://github.com/jlovejo2/Note-Taker-App.git

the link to the functional app is shown below:
https://intense-coast-12890.herokuapp.com/

## Table of Contents
* [User Story](#user-story)
* [Version 1.0](#version-1.0)
* [How To Use](#how-to-use)
* [Coding Languages Used](#coding-languages-used)
* [NPMs Used](#npms-used)
* [CSS Framework](#css-framework)
* [Structure of Code and Functions](#structure-of-code-and-functions)
* [Known Issues With Code](#known-issues-with-code)

## User Story
As a user I am in need of an app that allows me to write down notes and save them so that they can be referenced later.  I would like my past notes to be generated in list that is viewable and allows me to select them and view them once saved.  This app starts by taking user to a main page.  To enter note take they will click on get started button.  This will navigate to the notes page and allow the user to type a title and note content.  Once both of those fields have text the user can click on the save button to save it to the notes list on the left of the screen.  Notes can also be deleted from this menu.

## Version 1.0
* This note-taker app runs via heroku or by entering the command "node server.js."
* Make sure you are in the main folder when running the code on the command line.
* This app allows the user to write, save, view, and delete past notes.
* Past notes can not be edited.

## How To Use
See the starting page of app below.  The red arrow indicates the button user will press to be navigated towards notes page

*![alt text](/public/assets/images/Title_page.jpg "Starting page of App") 

The below image shows the layout of the notes page.  "Test1" indicates the location of the notes list.  In the green box are buttons user clicks on to either delete the specific note or all notes in the list.  "Test2" indicates the active note area where the note title and note text input fields are located.  In the green box are the buttons user presses to interact with the note.  The first is the save button and the second is to generate a new note (essentially clear out the text written in the active note area)

*![alt text](/public/assets/images/Notes_page.jpg "Starting page of App")

## Coding Languages Used
* HTML
* CSS
* Javascript
* Node.js

## NPMs Used:
* NPM express

## CSS Framework:
* Bootstrap
* FontAwesome

## Structure of Code and Functions
* db folder - contains the database files that store the notes information
    - db.json
* public folder - contains all the code that is needed to for the browser to run the application
    - assets folder - contains all the javascript and css code
        - css folder
            - style.css - is the actual file with all the code for css
        - js folder
            - index-solved.js - is the code being reference by the notes.html to create functionality of the website
            - functions.js - is the file created where some custom functions are stored and exported for reference in other files
                - getNoteJson() - is function that receives a file that is to be returned as a parsed JSON object
                - writeToFile() - is function that receives a file name and string.  The string is written into the specified file overwriting its content.
    -index.html - the homepage of the application
    -notes.html - the html for the notes page of the application
* routes - contains all the routing js files required by express and server.js file
    - apiRoutes.js - has all the routing for the api side of the server.  Example GET, POST, DELETE requests
    - htmlRoutes.js - has all the routing that specifies where to navigate the user based on html functionality.  It creates the navigation for all the links used in the html code
* server.js - is the actual file that is run to create application and start server listening.


## Known Issues With Code
* The user can not edit a saved note
