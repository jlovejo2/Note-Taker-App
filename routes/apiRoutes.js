const notesDB = require("../db/db.json")


module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    console.log(res);
    // console.log(db);
    res.json(db)
})


app.post("/api/notes", function(req,res){
    db.push(req.body)
    res.json(true)
})


app.post("/api/notes", function (req, res){
db.push(req.body);
res.json(true);

})


}