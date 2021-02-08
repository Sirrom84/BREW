const express = require('express');
const router  = express.Router();

// Get request to restaurants from Home Page --> gets the list of restaurants from the users(user_id)

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("Before Query")
    db.query(`SELECT * FROM restaurants;`)
      .then(data => {
        const restaurants = data.rows;
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });


  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM restaurants WHERE user_id = $1;`, [req.params.id])
      .then(data => {
        const restaurants = data.rows;
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  return router;
};
