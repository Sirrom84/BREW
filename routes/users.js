/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { request } = require('express');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });








  return router;
};

// example of API
// we want to return TRUE if the restaurant is a place

// const isRestaurant = function(callback) {
//   const url = apiAddress;
//   request(url, (error, response, body) => {
//     if (error) {                          // if theres an error, we want to catch it
//       return callback(error, null)
//     };

//     console.log(body)

//     return true; // verify if the item is a restaurant
//   })
// };

// // source for code: https://web.compass.lighthouselabs.ca/activities/898


// Get /
router.get('/', (req, res) => {});

// Get /new
router.get('/', (req, res) => {});

// Get/:id (where id = books, movies, restaurants, products)
router.get('', (req, res) => {});

// Get/:id/edit (where id = books, movies, restaurants, products)
router.get('', (req, res) => {});

// Get/:id/api (where id = books, movies, restaurants, products)
router.get('', (req, res) => {});

module.exports = router;
