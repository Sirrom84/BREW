/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/:id", (req, res) => {
    console.log("THIS IS THE request:", req.params)
    db.query(`SELECT * FROM books WHERE user_id = $1;`, [req.params.id])
      .then(data => {
        const books = data.rows;
        res.json({ books })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  return router;
};


