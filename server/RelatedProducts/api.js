const axios = require('axios');
const {TOKEN} = require('../config.js');

var getRelated = (id) => {
  //console.log('id: ', id);
  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }

  return axios(options);
}

var getStyles = (id) => {
  //console.log('id: ', id);
  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }

  return axios(options);
}

const getProducts = (id) => {
  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }
    return axios(options);
}


module.exports = {
  getRelated,
  getStyles,
  getProducts
}