/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routesare mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //display books for a specific user
  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM items
    WHERE user_id = $1
    AND category_id = 1
    ORDER BY date_added;`, [req.params.id])
      .then(data => {
        const books = data.rows;
        res.json({ books })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: err.message});
      });
  });

  //post request to create new item
  router.post('/:id/new', (req, res) => {
    const userId = req.params.id;
    console.log("This is the req.body", req.body)
    const name = req.body["name"];
    console.log("this is the name:", name)
    const capName =  name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const date_added = new Date().toISOString().slice(0, 10);
    const values = [userId, capName, date_added];
    console.log("This is the values to add:", values)

    db.query(`
    INSERT INTO items (category_id, user_id, name, date_added)
    VALUES (1, $1, $2, $3)`, values)
      .then(data => {
        const newBook = data.rows;
        res.json({ newBook})
      })
      .catch(err => {
        console.log(err)
      })
  })

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];

    db.query(`
    DELETE FROM items
    WHERE user_id = $1
    AND category_id = 1
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
    const categoryId = req.body["categoryId"]
    const values = [categoryId, userId, itemId]
    console.log("Thses are my values:", values)

    const editItem = `
    UPDATE items
    SET category_id = $1
    WHERE user_id = $2
    AND id = $3
    RETURNING *`
    db.query(editItem, values)
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
