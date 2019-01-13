const axios = require('axios');
const { 
  latestTvUrl,
  popularTvUrl,
  topRatedTvUrl,
  tvDetailsUrl,
  seasonUrl,
  episodeUrl, tvBySearchUrl } = require('../utils/url.tmdb');

const getTvBySearch = (keyword, page, cb, adult=false) => {
  axios({
    method: 'get',
    url:tvBySearchUrl(keyword, page, adult),
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

const getTopTvShows = (cb) => {
  axios({
    method: 'get',
    url:topRatedTvUrl(),
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

const getPopularTvShows = (cb) => {
  axios({
    method: 'get',
    url:popularTvUrl(),
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}
const getLatestTvShows = (cb) => {
  axios({
    method: 'get',
    url:latestTvUrl(),
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}

const getTv = (tvId, cb) => {
  axios({
    method: 'get',
    url:tvDetailsUrl(tvId),
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

const getSeason = (tvId, seasonNum, cb) => {
  axios({
    method: 'get',
    url:seasonUrl(tvId, seasonNum),
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

const getEpisode = (tvId, seasonNum, episodeNum, cb) => {
  axios({
    method: 'get',
    url:episodeUrl(tvId, seasonNum, episodeNum),
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
  getTopTvShows,
  getLatestTvShows,
  getPopularTvShows,
  getTv, getSeason,
  getEpisode,
  getTvBySearch
}