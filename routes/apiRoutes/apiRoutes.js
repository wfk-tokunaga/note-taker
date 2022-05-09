const router = require('express').Router();
const db = require('../../db/db');
const { createNewNote, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    console.log('GET request made!');
    console.log(`req.body:\n${req.body}`);
    res.json(db);
});

router.post('/notes', (req, res) => {
    console.log('POST request made!');
    // Assign a unique id to each note
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

module.exports = router;