const fs = require('fs');
const functionsFile = require('../public/assets/js/functions');

//This line of code exports the gets, posts, and delete method to be called in the server.js file
module.exports = function (router) {

    router.get("/api/notes", function (req, res) {

        //this line of code finds the db json file and reads the data.  The json.parse is needed to parse the data from raw format into a json format
        let notesDATA = functionsFile.getNoteJSON("./db/db.json");
        //this line of code actually sends the data as a response to the client
        res.json(notesDATA);
    })

    router.post("/api/notes", function (req, res) {

        //This line of code takes the body from the required input from the post and sets it to a variable called newNote
        let newNote = JSON.stringify(req.body);
        let id = functionsFile.getNoteJSON("./db/db.json").length + 1;
        //reads the db.json file and turns the returned data into a string and sets it to a variable called noteJSON
        let noteJSON = JSON.stringify(functionsFile.getNoteJSON("./db/db.json"));

        //takes the string of data returned from reading the db.json and slices it at the first and last position
        //this is essentially just removing the "[]" from the db.json
        const currentDB = noteJSON.slice("1", "-1");
        let newDB = "";
        //slices the format of the newNote variable and adds a generated id that is unique to the saved note and sets it to variable addID
        let addID = newNote.slice("0", "-1") + ', "id": "' + id + '"}'

        //This if else statement determines if the 
        if (currentDB === "") {
            newDB = "[" + addID + "]";
        } else {
            //This takes the sliced data from the db.json and the required data from the post and sets it equal to  new variable newDB
            newDB = "[" + currentDB + "," + addID + "]";
        }

        //This takes the variable newDB and writes it to the db.json file
        functionsFile.writeToFile("./db/db.json", newDB);
        res.send(console.log("note added!"))
    });

    //This line of code looks for when a delete request is made to the server with the route of /api/notes.
    //the ":id"  sets a parameter on that route that will deliver the input after the colon as a parameter in req object.
    router.delete("/api/notes/:id", function (req, res) {

        //grabs the parameter delivered in the route and sets it equal to a variable id
        const id = req.params.id;

        //runs a function from my functions.js file and sets it equal to a variable
        let noteJSON = functionsFile.getNoteJSON("./db/db.json");

        //this line finds the index of JSON object noteJSON that matches the id value delivered in route.
        const indexNoteToDelete = noteJSON.findIndex(function (index) {
            if (index.id == id) {
                return true
            } else {
                return false
            }
        });

        //This splices the element that corresponds to the index found in above code
        const noteToDelete = noteJSON.splice(indexNoteToDelete, 1);

        //This line filters the noteJSON variable into a new array of elements that do not equal the element that corresponds to id delivered in route
        const newJSON = noteJSON.filter((index) => {
            return index !== noteToDelete
        })

        //This line stringifies the new array and writes it to the database
        functionsFile.writeToFile("./db/db.json", JSON.stringify(newJSON));
        //This line is important because it ends the delete request and sends back the given console.log
        res.send(console.log("note deleted!"))
    });


    router.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        let apiJSON = [];

        functionsFile.writeToFile("./db/db.json", JSON.stringify(apiJSON));

        res.send(console.log("Database reset to empty"));
    });

};

