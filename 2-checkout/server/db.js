const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

const register = (sessionId, user) => {
  return new Promise ((resolve, reject) => {
    const string = `SELECT * FROM login WHERE loginEmail = '${user.email}'`;
    connection.query(string, (err, result) => {
      if (result.length) {
        console.log('email found in database');
        return reject();
      } else {
        console.log('email NOT found in database');
        const queryString = 'INSERT INTO login (firstName, lastName, loginEmail, loginPassword, sessionId) VALUES (?, ?, ?, ?, ?)';
        const queryArgs = [user.firstname, user.lastname, user.email, user.password, sessionId];
        connection.query(queryString, queryArgs, (err, result) => {
          return resolve(result)
        })
      }
    })
  })
}

const user = (info) => {
  return new Promise ((resolve) => {
    const queryString = 'INSERT INTO users (fullName, shippingLine1, shippingLine2, city, shippingState, shippingZipCode, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const queryArgs = [info.fullname, info.shippingLine1, info.shippingLine2, info.city, info.state, info.ZIPCode, info.email, info.phone];
    connection.query(queryString, queryArgs, (err, result) => {
      return resolve(result)
    })
  })
}

module.exports.db = db;
module.exports.register = register;
module.exports.user = user;

