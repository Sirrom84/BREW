const express = require('express');
const router  = express.Router();
const axios = require("axios");
const { response } = require('express');
let API_KEY = "C25033A4B2C84329A544B107DB021CAB"


//REST
const userSearch = "xbox"
// set up the request parameters
const params = {
  api_key: API_KEY,
  type: "search",
  amazon_domain: "amazon.com",
  search_term: userSearch,
  sort_by: "average_review",


}

module.exports = (db) => {

  router.get("/buy", (req,res) => {

    // make the http GET request to Rainforest API
    axios.get('https://api.rainforestapi.com/request', {params})

    .then(response => {



      res.send(JSON.stringify(response.data.search_results, 0, 2));
      const search = response.data.search_results;
      //Just want to display 5 or 10 items to the user
      search.slice(0,5).forEach(element => {
        console.log("NAME: " + element["title"] + " IMG: " + element["image"]);

      });


      }).catch(error => {
        console.log(error);
      })

})





  router.get("/:id", (req, res) => {
    db.query(`
    SELECT *
    FROM products
    WHERE user_id = $1
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

  return router;
};
