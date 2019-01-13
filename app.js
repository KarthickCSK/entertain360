require('dotenv').config();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const twRoutes = require('./routes/twitter');
const tmdbTvRoutes = require('./routes/tmdbtv');
const tmdbMovieRoutes = require('./routes/tmdbmovie');
const tmdbCommonRoutes = require('./routes/tmdb');
const express = require('express');
const port = process.env.PORT || process.env.SERVER_PORT;
const whiteList = ['http://localhost:3000', 'https://polar-caverns-40390.herokuapp.com'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/twitter', twRoutes);
app.use('/tmdb-tv', tmdbTvRoutes);
app.use('/tmdb-movie', tmdbMovieRoutes);
app.use('/tmdb', tmdbCommonRoutes);
app.use('/', (req,res) => {
  res.send('Welcome')
})
app.use((req, res) => {
  res.send('Not Found....!')
})
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
});
