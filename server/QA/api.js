const axios = require('axios');
const TOKEN = require('../config.js');

var getQuestions = () => {

  var options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrsfo/products/q/questions`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  }
  return axios(options);
}

module.exports = {
  getQuestions
}


// const axios = require('axios');
// const TOKEN = require('../config.js');

// var getRelated = ({id}) => {

//   var options = {
//     method: 'GET',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrsfo/products/${id}/q`,
//     headers: {
//       'Authorization': `${TOKEN}`
//     }
//   }

//   return axios(options);
// }

// const axios = require('axios');
// const API_KEY = require('../config.js');

// const getData = () => (
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/', {
//     headers: {
//       'User-Agent': 'request',
//       Authorization: `token ${API_KEY}`,
//     },
//   })
//     .then((results) => {
//       console.log(results);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// );

// module.exports.getData = getData;