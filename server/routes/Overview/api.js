const axios = require('axios');
const config = require('../config.js');

//model page
const getProducts = (id) => {

    axios({
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo' + id,
        headers: {'Authorization': `token ${config.TOKEN}`},
    })
    .then(res => {
        console.log(res)
    })
}

module.exports = {getProducts};