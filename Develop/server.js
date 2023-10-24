// import express package
const express = require('express');
const path = require('path');
const getNotes = require('.Develop/public/index.js');
const PORT = 3001;
const app = express();


// static middleware pointing to the 'public' folder
app.use(express.static('develop/public'));

// create http methods for the various actions of the note taker app and then add the route handlers that correlate to the task what is being requested
// use sendFile to send the public file and path.join to link the server and the files you want to display in the browser to the client and use __dirname to get the absolute path so that when you deploy you don't have your stuff on the internet

// created GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// created GET route for notes page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => res.json(getNotes));

// check to see if the server is active
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });