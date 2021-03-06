//This variable is calling the path package so that we are able to cal our html files
const path = require("path"); 


//This line of code exports the  app function so that it can be referenced and used
module.exports = function (router) {

//The below lines of code handle HTML GET requests
//in each of the cases the user is shown a an html page content based on urls
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))

})


router.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//if no matching route is found default to index.html
router.get("*", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

};