/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Get request to Books from Home Page --> gets the list of books from the users(user_id) books db

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Before Query")
    db.query(`SELECT * FROM books;`)
      .then(data => {
        const books = data.rows;
        console.log("Book database", books)
        res.json({ books });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM books WHERE id = 1;`)
      .then(data => {
        const books = data.rows;
        console.log("Book database", books)
        res.json({ books });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  return router;
};





// const getUserWithEmail = function(email) {
//   return pool.query(`
//   SELECT *
//   FROM users
//   WHERE email = $1`, [email])
//   .then(res => (res.rows[0]))
//   .catch(err => {console.log(err)})
// }

// exports.getUserWithEmail = getUserWithEmail;
// select, update, insert, update on books to labber;
