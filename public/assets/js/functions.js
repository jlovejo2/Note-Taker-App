const fs = require('fs');

/**
 * This function runs the fs.readFileSync for a specified file and then parses the input JSON object
 * @param {File} fileToRead 
 */
function getNoteJSON(fileToRead) {
    let noteJSON = JSON.parse(fs.readFileSync(fileToRead, function (err) {
        //This if statement throws an error if an error occurs
        if (err) {
            throw err;
        }
    }));
    return noteJSON
};

/**
 * This function writes a given string of data into the specified file
 * @param {File} writeFile 
 * @param {String} newData 
 */
function writeToFile(writeFile, newData) {
    fs.writeFileSync(writeFile, newData, function (err) {
        if (err) {
            throw err;
        }
        console.log("JSON updated");
    });
}

//These lines of code export the above functions to be read in my apiRoutes.js
module.exports.getNoteJSON = getNoteJSON;
module.exports.writeToFile = writeToFile;
