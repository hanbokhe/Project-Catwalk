const axios = require('axios');
const config = require('../config.js');

//model page
const getProducts = () => {
    return axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products`,
        headers: {'Authorization': `${config.TOKEN}`}
    })
}

module.exports = {getProducts};