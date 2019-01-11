const Twit = require('twit');

const twConfig = require('../config/key.twitter');

const T = new Twit({...twConfig});

const getTrends = (woeID, cb) => {
  T.get('trends/place', { id:woeID }, (err, data, response) => {
    if(err) {
      cb ({status: false, error:err})
    } else {
      cb ({status: true, data:data})
    }
  })
}

module.exports = {
  getTrends
}