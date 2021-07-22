const axios = require('axios');
const TOKEN = require('../config.js');

var getRelated = ({id}) => {

  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrsfo/products/${id}/related`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }

  return axios(options);
}

module.exports = {
  getRelated
}