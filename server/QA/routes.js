const app = require('../../index.js');
const api = require('./api.js');


app.get('/products', (req, res) => {
  console.log('Related Products', req.body);
  var {id} = req.body;
  api.getRelated(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})
