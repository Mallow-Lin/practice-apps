require("dotenv").config();

const express = require('express');
const Path = require('path');
const mongooseDB = require('./db.js');
let app = express();
app.use(express.static(Path.join(__dirname, '/../client/dist')));

app.get('/fetch', (req, res) => {
  mongooseDB.Glossary.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err retreving Glossary data', err)
    })
});

app.get('/Search', (req, res) => {
  const word = req.query.term.toLowerCase();
  mongooseDB.Glossary.findOne({word: word})
    .then((result) => {
      if (!result) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.log('no result', err)
    })
})


let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});