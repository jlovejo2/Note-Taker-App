const fs = require('fs');

function getNoteJSON(fileToRead) {
    let noteJSON = JSON.parse(fs.readFileSync(fileToRead, function (err) {
        //This if statement throws an error if an error occurs
        if (err) {
            throw err;
        }
    }));
    return noteJSON
};

function writeToFile(writeFile, newData) {
    fs.writeFileSync(writeFile, newData, function (err) {
        if (err) {
            throw err;
        }
        console.log("JSON updated");
    });
}




module.exports.getNoteJSON = getNoteJSON;
module.exports.writeToFile = writeToFile;
