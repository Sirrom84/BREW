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

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];

    db.query(`
    DELETE FROM movies
    WHERE user_id = $1
    AND id = $2;`, values)
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
