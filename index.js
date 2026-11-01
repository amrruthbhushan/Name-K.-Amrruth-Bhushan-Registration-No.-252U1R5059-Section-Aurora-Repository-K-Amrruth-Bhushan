
const express = require('express');

const app = express();

// GET / - Welcome route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Node.js and Express!');
});

// GET /about - About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Amrruth Bhushan',
        section: 'Aurora'
    });
});

// GET /time - Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 - Unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
