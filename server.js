const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const route = require('./route/routes');

// adding middleware - cors : ignore cors violations of port communication
app.use(cors());

// body-parser
app.use(bodyparser.json());

// Define routes
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello World! - TXT BLOG ALIVE!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}... `));