var BmrkApi = require('./api/bmrk-api.js');

module.exports = {
  bmrk: BmrkApi({
    url: 'http://localhost:4000/api'
  })
};
