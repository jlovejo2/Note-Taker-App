const fs = require('fs');


module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    //this line of code finds the db json file and reads the data.  The json.parse is needed to parse the data from raw format into a json format
    let notesDATA = JSON.parse(fs.readFileSync("./db/db.json", function(err){
        if (err) {
            throw err;
        }
    }))
    //this line of code actually sends the data as a response to the client
    res.json(notesDATA);
})


app.post("/api/notes", function(req,res){

    //This line of code takes the body from the required input from the post and sets it to a variable called newNote
    let newNote = JSON.stringify(req.body);
    //reads the db.json file and turns the returned data into a string and sets it to a variable called noteJSON
    let noteJSON = JSON.stringify(JSON.parse(fs.readFileSync("./db/db.json",  function(err){
        //This if statement throws an error if an error occurs
        if (err) {
            throw err;
        }
    })));
    //takes the string of data returned from reading the db.json and slices it at the first and last position
    //this is essentially just removing the "[]" from the db.json
    const currentDB = noteJSON.slice("1","-1");
    //This takes the sliced data from the db.json and the required data from the post and sets it equal to  new variable newDB
    let newDB = "[" + currentDB + "," + newNote + "]";

    //This takes the variable newDB and writes it to the db.json file
    fs.writeFileSync("./db/db.json", newDB, function(err){
        if(err) {
            throw err;
        }
        console.log("JSON updated");
    });
});


// app.delete("/api/notes/:id", function (req, res){
// db.push(req.body);
// res.json(true);

// })


}