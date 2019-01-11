const router = require('express').Router();
const { getTrends } = require('../controllers/twitter');

// /twitter/trends/:woeID => get
router.get('/trends/:woeID', (req, res) => {
  const { woeID } = req.params;
  getTrends(woeID, (result)=>{
    res.send(result)
  })
})

module.exports = router;