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
    let newNote = req.body
    let newJSON = fs.appendFileSync("./db/db.json",newNote, function(err){
        if (err) {
            throw err
        }
    });
})


app.delete("/api/notes/:id", function (req, res){
db.push(req.body);
res.json(true);

})


}