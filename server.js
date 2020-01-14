const express = require("express");



//this line tells the node that we are creating an express server
const app = express();
//this line sets an initial port to be used in our listener
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
