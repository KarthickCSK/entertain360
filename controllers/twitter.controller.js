const Twit = require('twit');
const fs = require('fs');

const twConfig = require('../config/key.twitter');

const T = new Twit({...twConfig});

const getTrends = (woeID, cb) => {
  T.get('trends/place', { id:woeID }, (err, data, response) => {
    if(err) {
      cb ({status: false, error:err})
    } else {
      cb ({status: true, data:data[0]})
    }
  })
}

const getLocations = (cb) =>{
  fs.readFile('includes/woeid.list.json', 'utf8', (err, data) => {
    if(err) {
      cb({status: false, error:err})
    } else{
      cb({status: true, data:JSON.parse(data.substring(1))})
    }
  })
}
module.exports = {
  getTrends, getLocations
}