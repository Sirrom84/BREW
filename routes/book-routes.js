/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //display books for a specific user
  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM books
    WHERE user_id = $1
    ORDER BY date_added;`, [req.params.id])
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

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];

    db.query(`
    DELETE FROM books
    WHERE user_id = $1
    AND id = $2;`, values)
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

  //post request to edit
  router.post("/:id/edit", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const table = req.body["category"];
    const name = req.body["name"];
    const date = req.body["date"];
    // const deleteValues = [userId, itemId]
    const addValues = [userId, itemId, name, date];
    // console.log("Thses are my values:", deleteValues)
    console.log("Thses are my values:", addValues)

    const editItem = `
    with delete as (DELETE FROM books
    WHERE user_id = $1
    AND id = $2),
    INSERT INTO ${table} (user_id, name, date_added)
    VALUES ($1, $3, $4);`

    db.query(editItem, addValues)
      .then(data => {
        const books = data.rows;
        res.json({ books });
        })
      .catch(err => {
          console.log(err)
          res.status(500).json({ error: err.message});
        });
      });

        return  router;

      };


    //   db.query(editItem, deleteValues)
    //   .then(data => {

    //   })
    //   .catch(err => {
    //       console.log(err)
    //     });


    // const addItem = `
