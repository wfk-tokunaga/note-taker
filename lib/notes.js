const path = require('path');
const fs = require('fs');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    // update db file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function removeNote(noteId, notesArray) {
    console.log('Removing note ' + noteId);
    // update notesArray to only include the notes without that ID
    var updatedArr = notesArray.filter(note => note.id !== parseInt(noteId));
    // update note IDs
    for (let i = 1; i < updatedArr.length + 1; i++) {
        updatedArr[i - 1].id = i;
    }
    console.log(`new db`);
    console.log(updatedArr);
    // update db file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedArr, null, 2)
    );
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNewNote, validateNote, removeNote };