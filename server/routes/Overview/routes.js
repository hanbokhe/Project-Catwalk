const app = require('../../index.js');
const api = require('./api.js');

// controller page 

app.get('/products/', (req, res) => {
    console.log('Products', req.body);
    var{id} = req.body.id;
    api.getProducts(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(404).send(err);
        })
})