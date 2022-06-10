const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public')); //public is the problem? Theres no file called public. What do I put here?

app.get('/index', (req, res) => {
    console.log(path.join(__dirname, '/index.html'));
    res.sendFile(path.join(__dirname, '/index.html'));
  });



app.listen(PORT, () => {
    console.log(`App at http://localhost:${PORT}`);
  });