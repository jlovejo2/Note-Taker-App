const express = require("express");

//this line tells the node that we are creating an express server
const app = express();
//this line sets an initial port to be used in our listener.  the process.env.PORT is key because it is 
//checking whether or not you are on a local machine or being hosted
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//This line of code makes the entire contents of the public folder acessible when running through the server.
//Essentiall says if you can find a route for a file go to public folder and look in there
app.use(express.static("public"));

//Enables CORS for all resoures on my server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//______________________________________
//ROUTER
//the below lines of code point our server to a series of routing files
//in these files are lines of code that map out how our server responds when a user visits the app 
//_____________________________________
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//___________________
//LISTENER
//______________________

//This line of code effectively starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});
