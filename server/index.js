const express = require('express');
const axios = require('axios');
// const overview = require('./Overview/api.js');
const relatedProducts = require('./RelatedProducts/api.js');
const qa = require('./QA/api.js');
const reviews = require('./Reviews/api.js');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.get('/reviews', (req, res) => {
  var id = req.query.product_id
  reviews.getReviews(id)
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((err) => {
        res.status(404).send(err)
      })
})

app.get('/reviews/meta', (req, res) => {
  var id = req.query.product_id
  reviews.getMetaReviews(id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err)
    })
})

app.get('/products/:id', (req, res) => {
  var {id} = req.params;

  relatedProducts.getProducts(id)
      .then(({data}) => {
          res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err)
          res.status(404).send(err);
      })
})

app.get('/related/:id', (req, res) => {
  //console.log('Related Products', req.params);
  var {id} = req.params;

  relatedProducts.getRelated(id)
    .then(({data}) => {
      //console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.get('/styles/:id', (req, res) => {
  //console.log('Related Products', req.params);
  var {id} = req.params;

  relatedProducts.getStyles(id)
    .then(({data}) => {

      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})


app.get('/qa/questions/:id', (req, res) => {
  var {id} = req.params;
  console.log(id);
  qa.getQuestions(id)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    })
})

