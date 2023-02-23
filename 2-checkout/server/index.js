require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/register', (req, res) => {
  const user = req.query;
  const sessionId = req['session_id'];
  db.register(sessionId, user)
    .then(() => {
      console.log('saved (server)')
      res.sendStatus(201);
    })
    .catch(() => {
      console.log('email saved in database already (server)')
      res.sendStatus(404);
    })
})

app.post('/shipping', (req, res) => {
  const info = req.query;
  const sessionId = req['session_id'];
  db.user(sessionId, info)
    .then(() => {
      console.log('shipping info saved');
      res.sendStatus(201);
    })
})

app.post('/payment', (req, res) => {
  const info = req.query;
  const sessionId = req['session_id'];
  db.payment(sessionId, info)
    .then(() => {
      console.log('payment info saved');
      res.sendStatus(201);
    })
})

app.get('/purchase', (req, res) => {
  const sessionId = req['session_id'];
  db.purchase(sessionId)
    .then((result) => {
      const data = result[0];
      data.creditCard = data.creditCard.slice(-4);
      res.send(data);
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
