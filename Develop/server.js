// import express package
const express = require('express');
const path = require('path');
const getNotes = require('./db/db.json');
const PORT = 3001;
const app = express();
const fs = require('fs');


// static middleware pointing to the 'public' folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

// created GET route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// created GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// create GET route to getNotes
app.get('/api/notes', (req, res) => res.json(getNotes));

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (err, data) => {
     if (err){
        console.log(err)
     } else {
        data = JSON.parse(data)
        data.push(req.body)
        fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
            if (err) {  
                console.log(err)
            } else {
                res.send("Success")
            }
        })
     }
    })
})

// check to see if the server is active
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
