const router = require('express').Router();
const db = require('../../db/db');
const { createNewNote, validateNote, removeNote } = require('../../lib/notes');

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

    console.log(req.body);

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

router.delete('/notes/:id', (req, res) => {
    console.log('DELETE request made!');

    const removedNoteId = removeNote(req.params.id, db);
    res.json(removedNoteId);
    
    // if (db.length >= req.params.id) {
    //     const removedNoteId = removeNote(req.params.id, db);
    //     res.json(removedNoteId);
    // } else {
    //     res.status(400).json({message: "No note found with that ID."});
    // }
    
})

module.exports = router;