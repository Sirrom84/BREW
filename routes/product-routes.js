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
        // const search = response.data.search_results;
        // Just want to display 5 or 10 items to the user
        // search.slice(0,10).forEach(element => {
        //   console.log("NAME: " + element["title"] + " IMG: " + element["image"]);

        // });


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

  //post request to delete
  router.post("/:id/delete", (req,res) => {
    const userId = req.params.id;
    const itemId = req.body["itemId"];
    const values = [userId, itemId];
    console.log("Products post request:", values)

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
