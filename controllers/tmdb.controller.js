const axios = require('axios');
const { 
  multiBySearchUrl,
  configUrl,
} = require('../utils/url.tmdb');

const getBySearch = (keyword, page, cb, adult=false) => {
  axios({
    method: 'get',
    url:multiBySearchUrl(keyword, page, adult),
    responseType: 'json'
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}

const getConfig = (cb) => {
  axios({
    method: 'get',
    url:configUrl(),
    responseType: 'json'
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}

module.exports = {
  getBySearch, getConfig
}