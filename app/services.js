var BmrkApi = require('./api/bmrk-api.js');

module.exports = {
  bmrk: BmrkApi({
    // url: 'https://bmrk.herokuapp.com/api'
    url: 'http://localhost:4000/api'
  })
};
