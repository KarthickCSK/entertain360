const router = require('express').Router();

const { getUpcomingMovis,
  getPopularMovies,
  getLatestMovies,
  getMovie,
  searchMovie} = require('../controllers/tmdbmovie.controller'); 

router.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  searchMovie(keyword, page, (result)=>{
    res.send(result)
  }, req.query.adult||false)
})
  
router.get('/:movieId', (req, res) => {
  const { movieId } = req.params;
  getMovie(movieId, (result) => {
    res.send(result)
  })
})

router.get('/latest', (req, res) => {
  getLatestMovies((result)=>{
    res.send(result)
  })
})

router.get('/upcoming', (req, res) => {
  getUpcomingMovis((result)=>{
    res.send(result)
  })
})

router.get('/popular', (req, res) => {
  getPopularMovies((result)=>{
    res.send(result)
  })
})


module.exports = router