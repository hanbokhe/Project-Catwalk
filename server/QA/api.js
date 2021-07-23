const axios = require('axios');
const config = require('../config.js');

const parseQString = (input, flag = '') => {
  if (input === undefined) {
    return '';
  }
  if (flag) {
    return `${flag}=${input}`;
  }
  return `/${input}`;
};

const getQuestions = (q, cb) => {
  q.product_id = parseQ(q.product_id, '?product_id'); // /q.product_id
  q.flag = parseQ(q.flag); // /q.flag
  q.page = parseQ(q.page, '&page'); // page=q.page
  q.count = parseQ(q.count, '&count=50'); // count=q.count

  let query = q.product_id + q.page + q.count;

  if (q.question_id) {
    if (q.page) {
      q.page = `/?${q.page}`;
      if (q.count) {
        q.count = `&${q.count}`;
      }
    } else if (q.count) {
      q.count = `/?${q.count}`;
    }
    query = `/${q.question_id}/answers/${q.page}${q.count}`;
  }

axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo136/qa/questions${query}&count=50 `,
    {
      headers: {
        'User-Agent': 'request',
        Authorization: config.API_KEY,
      },
    },
  )
    .then((results) => {
      cb(null, results.data);
    })
    .catch((err) => {
      cb(err, null);
    });
};


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