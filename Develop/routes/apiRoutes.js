const fs = require('fs');
//this calls a functions.js file and allows the exported functions in it to be called
const functionsFile = require('../public/assets/js/functions');

module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    //this line of code finds the db json file and reads the data.  The json.parse is needed to parse the data from raw format into a json format
    let notesDATA = functionsFile.getNoteJSON("./db/db.json");
    //this line of code actually sends the data as a response to the client
    res.json(notesDATA);
})


app.post("/api/notes", function(req,res){

    //This line of code takes the body from the required input from the post and sets it to a variable called newNote
    let newNote = JSON.stringify(req.body);
    let id = functionsFile.getNoteJSON("./db/db.json").length + 1;
    //reads the db.json file and turns the returned data into a string and sets it to a variable called noteJSON
    let noteJSON = JSON.stringify(functionsFile.getNoteJSON("./db/db.json"));
    //takes the string of data returned from reading the db.json and slices it at the first and last position
    //this is essentially just removing the "[]" from the db.json
    console.log(noteJSON);
    const currentDB = noteJSON.slice("1","-1");
    let newDB ="";
    let addID = newNote.slice("0","-1") + ', "id": "' + id + '"}'
    console.log(currentDB);

    if(currentDB === "") {
        newDB = "[" + addID + "]";
    } else {
    //This takes the sliced data from the db.json and the required data from the post and sets it equal to  new variable newDB
    newDB = "[" + currentDB + "," + addID + "]";
    }
    
    console.log(newDB);
    //This takes the variable newDB and writes it to the db.json file
    functionsFile.writeToFile("./db/db.json", newDB);
});
//This line of code looks for when a delete request is made to the server with the route of /api/notes.
//the ":id"  sets a parameter on that rout that will deliver the input after the colon as a parameter in req object.
app.delete("/api/notes/:id", function(req,res){

    const id = req.params.id;

    let noteJSON = functionsFile.getNoteJSON("./db/db.json");

    const indexNoteToDelete = noteJSON.findIndex(function(index) {
       
        if(index.id == id) {
            return true
        } else {
            return false
        }
    });

    const noteToDelete = noteJSON.splice(indexNoteToDelete, 1);

    const newJSON = noteJSON.filter((index) => {
        return index !== noteToDelete
    })

    functionsFile.writeToFile("./db/db.json", JSON.stringify(newJSON));    
});


};

