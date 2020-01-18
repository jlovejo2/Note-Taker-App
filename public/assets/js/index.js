const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
const activeNote = {};
const queryURL = "/api/notes";


// A function for getting all notes from the db
function getNotes(dataURL) {

    return $.ajax({
        url: dataURL,
        method: "GET"
    })
};

// A function for saving a note to the db
function saveNote(dataURL, newNote) {
    return $.ajax({
        url: dataURL,
        data: newNote,
        method: "POST"
    })
};

// A function for deleting a note from the db
const deleteNote = function (dataURL, id) {
    $.ajax({
        url: dataURL + id,
        method: "delete"
    })
};

// If there is an activeNote, display it, otherwise render empty inputs
const renderActiveNote = function () {

};

// Get the note data from the inputs, save it to the db and update the view
const handleNoteSave = function () {

};

// Delete the clicked note
const handleNoteDelete = function (event) {

};

// Sets the activeNote and displays it
const handleNoteView = function () {

};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = function () {

};

// If a note's title or text are empty, hide the save button
// Or else show it
const handleRenderSaveBtn = function () {

};

// Render's the list of note titles
const renderNoteList = function (notes) {

};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = function (param) {

    getNotes(param).then(function (notes) {
        console.log(notes[0].text);
        for (let i=0; i < notes.length; i++) {
            const listItem = $("<li>").text((notes[i].text))
            $noteList.append(listItem);
            // $(".container").append($noteList)
            // $(".container").append($(".note-textarea"));
            // $(".container").append($(".save-note"));
            // $(".container").append($(".new-note"));
        }
    })
}

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

console.log("Howdy");
// Gets and renders the initial list of notes
getAndRenderNotes(queryURL);


// deleteNote(queryURL);





    //  $.ajax({
    //     url: dataURL
    // }).done(function (allNotes) {
    //     console.log(allNotes);
    //     getAndRenderNotes(allNotes);
    // })
