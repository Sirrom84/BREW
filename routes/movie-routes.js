const express = require('express');
const router  = express.Router();

// Get request to movies from Home Page --> gets the list of movies based on the user_id.

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM movies
    WHERE user_id = $1
    ORDER BY date_added;`, [req.params.id])
      .then(data => {
        const movies = data.rows;
        res.json({ movies });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  return router;
};
