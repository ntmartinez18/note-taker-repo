// import express package
const express = require('express');
const path = require('path');
const getNotes = require('./Develop/public/assets/js/index.js');
const PORT = 3001;
const app = express();


// static middleware pointing to the 'public' folder
app.use(express.static('Develop/public'));
app.use(express.json());
app.use(express.urlencoded())

// created GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);

// created GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
);

// create GET route to getNotes
app.get('/api/notes', (req, res) => res.json(getNotes));

// check to see if the server is active
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
