const express = require('express');
const router  = express.Router();

// Get request to movies from Home Page --> gets the list of movies based on the user_id.

module.exports = (db) => {

  router.get("/:id", (req, res) => {

    db.query(`
    SELECT *
    FROM items
    WHERE user_id = $1
    AND category_id = 2
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
    DELETE FROM items
    WHERE user_id = $1
    AND category_id = 2
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

  //post request to edit
  router.post("/:id/edit", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const categoryId = req.body["categoryId"]
    const values = [categoryId, userId, itemId]
    console.log("Thses are my values:", values)

    const editItem = `
    UPDATE items
    SET category_id = $1
    WHERE user_id = $2
    AND id = $3
    RETURNING *;`
    db.query(editItem, values)
      .then(data => {
        const restaurants = data.rows;
        res.json({ restaurants });
        })
      .catch(err => {
          console.log(err)
          res.status(500).json({ error: err.message});
        });
      });

  return router;
};
