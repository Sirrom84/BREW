const express = require('express');
const router  = express.Router();

// Get request to restaurants from Home Page --> gets the list of restaurants from the users(user_id)

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM restaurants
    WHERE user_id = $1
    ORDER BY date_added;`, [req.params.id])
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

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];

    db.query(`
    DELETE FROM restaurants
    WHERE user_id = $1
    AND id = $2;`, values)
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

  //post request to edit
  router.post("/:id/edit", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const table = req.body["category"];
    const name = req.body["name"];
    const date = req.body["date"];
    const deleteValues = [userId, itemId]
    const addValues = [userId, name, date];
    console.log("Thses are my values from RES:", deleteValues)
    console.log("Thses are my values from RES:", addValues)

    const editItem = `
    DELETE FROM restaurants
    WHERE user_id = $1
    AND id = $2;`

    db.query(editItem, deleteValues)
      .then(data => {
        console.log("this works:", data)
      })
      .catch(err => {
          console.log(err)
        });

    const addItem = `
    INSERT INTO ${table} (user_id, name, date_added)
    VALUES ($1, $2, $3);`

    db.query(addItem, addValues)
      .then(data => {
        const restaurants = data.rows;
        res.json({ restaurants });
        })
      .catch(err => {
          console.log(err)
          res.status(500).json({ error: err.message});
        });
      });

  router.get("/:id/edit", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const table = req.body["category"];
    const name = req.body["name"];
    const date = req.body["date"];
    const deleteValues = [userId, itemId]
    const addValues = [userId, name, date];

    const newItem = `
    SELECT * FROM ${table}
    `

  });







      return router;

    };
