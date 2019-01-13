const router = require('express').Router();

const { getTopTvShows, getLatestTvShows,
  getPopularTvShows, getTv, getSeason, getEpisode, getTvBySearch 
} = require('../controllers/tmdbtv.controller'); 

router.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  getTvBySearch(keyword, page, (result)=>{
    res.send(result)
  })
})

router.get('/top', (req, res) => {
  getTopTvShows((result)=>{
    res.send(result)
  })
})

router.get('/latest', (req, res) => {
  getLatestTvShows((result)=>{
    res.send(result)
  })
})

router.get('/popular', (req, res) => {
  getPopularTvShows((result)=>{
    res.send(result)
  })
})

router.get('/season', (req, res) => {
  const { tvId, seasonNum } = req.query;
  getSeason(tvId, seasonNum, (result) => {
    res.send(result)
  })
})

router.get('/episode', (req, res) => {
  const { tvId, seasonNum, episodeNum } = req.query;
  getEpisode(tvId, seasonNum, episodeNum, (result) => {
    res.send(result)
  })
})

router.get('/:tvId', (req, res) => {
  const { tvId } = req.params;
  getTv(tvId, (result) => {
    res.send(result)
  })
})

module.exports = router