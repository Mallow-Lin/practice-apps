require("dotenv").config();

const express = require('express');
const Path = require('path');
const mongooseDB = require('./db.js');
let app = express();
app.use(express.static(Path.join(__dirname, '/../client/dist')));


let port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});