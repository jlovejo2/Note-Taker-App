//This variable is calling the path package so that we are able to cal our html files
const path = require("path"); 


//This line of code exports the  app function so that it can be referenced and used
module.exports = function (app) {
//The below lines of code handle HTML GET requests
//in each of the cases the user is shown a an html page content based on urls

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})


app.get("/main", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//if no matching route is found default to index.html
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

}