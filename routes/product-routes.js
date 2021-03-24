const express = require('express');
const router  = express.Router();
const axios = require("axios");
const { response } = require('express');
let API_KEY = "AA3663A2AD84442BA93C2311488DA2A7";

module.exports = (db) => {
//inside of this to route axios /buy is just temp until  we can get the db linked

  router.get("/buy/:id", (req,res) => {
    console.log("Thsi is my req.params:", req.params.id);
    // make the http GET request to Rainforest API

  const userSearch = req.params.id;
  //Request params
  const params = {

  api_key: API_KEY,
  type: "search",
  amazon_domain: "amazon.com",
  search_term: userSearch,
  sort_by: "average_review",
};

    axios.get('https://api.rainforestapi.com/request', {params})

    .then(response => {
        res.send(response.data.search_results, 0, 2);

      }).catch(error => {
        console.log(error);
      });

  });

  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM items
    WHERE user_id = $1
    AND category_id = 4
    ORDER BY date_added;`, [req.params.id])
      .then(data => {
        const products = data.rows;
        res.json({ products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });

  //post request to create new item
  router.post('/:id/new', (req, res) => {
    const userId = req.params.id;
    const name = req.body["name"];
    const capName =  name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const date_added = new Date().toISOString().slice(0, 10);
    const values = [userId, capName, date_added];
    console.log("This is the values to add:", values)

    db.query(`
    INSERT INTO items (category_id, user_id, name, date_added)
    VALUES (4, $1, $2, $3)`, values)
      .then(data => {
        const newProducts = data.rows;
        res.json({ newProducts })
      })
      .catch(err => {
        console.log(err)
      })
  });

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];

    db.query(`
    DELETE FROM items
    WHERE user_id = $1
    AND category_id = 4
    AND id = $2;`, values)
      .then(data => {
        const products = data.rows;
        res.json({ products });
        })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: err.message});
    });
  });

  //post request to edit
  router.post("/:id/edit", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const categoryId = req.body["categoryId"]
    const values = [categoryId, userId, itemId]


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
