const db = require('./db/db');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Let's write the routes in here first then refactor them out
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
})

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    // update db file
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(db, null, 2)
    );
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

// ========== ROUTES TO BE REFACTORED LATER ==========
/* 
    Routes Needed:
        1. GET /api/notes
        2. POST /api/notes
        3. /notes
        4. *
*/

// Done?
app.get('/api/notes', (req, res) => {
    console.log('GET request made!');
    console.log(`req.body:\n${req.body}`);
    res.json(db);
});

// Done? Try to make a bad request
app.post('/api/notes', (req, res) => {
    console.log('POST request made!');
    // Need to assign a unique id to each note
    const noteId = db.length + 1;
    req.body.id = noteId;

    // Validate note
    if (!validateNote(req.body)) {
        res.status(400).send("Note was not constructed properly");
    } else {
        // Create new note and write to db
        const note = createNewNote(req.body, db);
        // Return note json
        res.json(note);
    }
});



// app.get('/notes', (req, res) => {
//     console.log('GET request made!');
//     console.log(`req.body:\n${req.body}`);
//     res.send('Nice!');
// });

// app.get('/*', (req, res) => {
//     console.log('GET request made!');
//     console.log(`req.body:\n${req.body}`);
//     res.send('Nice!');
// });