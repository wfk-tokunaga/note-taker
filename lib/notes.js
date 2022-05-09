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

function validateNote(note) {
    if (!note.title || typeof note.body !== 'string') {
        return false;
    }
    if (!note.body || typeof note.body !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNewNote, validateNote };