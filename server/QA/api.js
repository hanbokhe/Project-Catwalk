const axios = require('axios');
const {TOKEN} = require('../config.js');

var getQuestions = (id) => {

  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=${id}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }
  return axios(options);
}

module.exports = {
  getQuestions
}