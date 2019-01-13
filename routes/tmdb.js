const router = require('express').Router();

const { getBySearch, getConfig
} = require('../controllers/tmdb.controller'); 

router.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  getBySearch(keyword, page, (result)=>{
    res.send(result)
  })
})

router.get('/config', (req, res) => {
  getConfig((result)=>{
    res.send(result)
  })
})


module.exports = router