const axios = require('axios');
const { 
  movieByIdUrl,
  movieBySearchUrl,
  latestMovieUrl,
  popularMovieUrl,
  upcomingMovieUrl
} = require('../utils/url.tmdb');

const getUpcomingMovis = (cb) => {
  axios({
    method: 'get',
    url:upcomingMovieUrl(),
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

const getPopularMovies = (cb) => {
  axios({
    method: 'get',
    url:popularMovieUrl(),
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}
const getLatestMovies = (cb) => {
  axios({
    method: 'get',
    url:latestMovieUrl(),
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}

const getMovie = (movieId, cb) => {
  axios({
    method: 'get',
    url:movieByIdUrl(movieId),
  })
  .then((response) => {
    cb({status:true, data:response.data})
  }).catch(err=>{
    console.log(err)
    cb({status:false, error:err.data})
  });
}
const searchMovie = (keyword, page, cb, adult=false) => {
  axios({
    method: 'get',
    url:movieBySearchUrl(keyword, page, adult),
  })
  .then((response) => {
    // console.log(response)
    cb({status:true, data:response.data})
  }).catch(err=> {
    console.log(err)
    cb(err)
  });
}
module.exports = {
  getUpcomingMovis,
  getPopularMovies,
  getLatestMovies,
  getMovie,
  searchMovie
}