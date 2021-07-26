const express = require('express');
const axios = require('axios');
const overview = require('./Overview/api.js');
const relatedProducts = require('./RelatedProducts/api.js');
const qa = require('./QA/api.js');
const reviews = require('./Reviews/api.js');
//const api = require('../Reviews/api.js')


const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.get('/reviews', (req, res) => {
  reviews.getReviews(req.query.product_id)
      .then((data) => {
          res.status(200).send(data.data);
      })
      .catch((err) => {
          res.status(404).send(err);
      })
})
