const express = require('express');
const router  = express.Router();

// Get request to movies from Home Page --> gets the list of movies based on the user_id.

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Before Query")
    db.query(`SELECT * FROM movies;`)
      .then(data => {
        const books = data.rows;
        res.json({ books });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM movies WHERE user_id = $1;`, [req.params.id])
      .then(data => {
        const books = data.rows;
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
