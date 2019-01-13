const router = require('express').Router();
const { getTrends, getLocations } = require('../controllers/twitter.controller');

// /twitter/trends/:woeID => get
router.get('/trends/:woeID', (req, res) => {
  const { woeID } = req.params;
  getTrends(woeID, (result)=>{
    res.send(result)
  })
})

// /twitter/locations => get
router.get('/locations', (req, res) => {
  getLocations((result) => {
    res.send(result)
  })
})
module.exports = router;