require('dotenv').config();
const path = require('path');

const twRoutes = require('./routes/twitter');
const express = require('express');
const movieUrls = require('./utils/url.tmdb');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/twitter', twRoutes);

app.use('/welcome', (req,res) => {
  res.send('Welcome')
})
app.use((req, res) => {
  res.send('Not Found....!')
})
app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`)
});

console.log(movieUrls)