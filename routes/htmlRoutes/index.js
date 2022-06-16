const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('GET request made for index.html');
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    console.log('GET request made for notes.html');
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    console.log('GET request made for index.html');
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;