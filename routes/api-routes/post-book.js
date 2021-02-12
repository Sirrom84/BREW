const express = require('express');
const router  = express.Router();

module.exports = (db) => {

router.post('/:id/new', (req, res) => {

  db.query(`
  INSERT INTO items
  WHERE user_id = $1
  AND category_id = 2
  ORDER BY date_added;`, [req.params.id])
    .then(data => {
      const newbook = data.rows;
      res.json({ newbook })
    })
    .catch(err => {
      console.log(err);
    })

});

};
