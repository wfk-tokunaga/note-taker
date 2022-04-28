const express = require('express');

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



// ========== ROUTES TO BE REFACTORED LATER ==========

app.get('/api', (req, res) => {
    console.log('GET request made!');
    console.log(`req.body:\n${req.body}`);
    res.send('Nice!');
});