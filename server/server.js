const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3033;
const getTweets = require('./utils/getTweets');
const postTweet = require('./utils/postTweet');
const geoCode = require('./utils/getGeocode');
const volleyball = require('volleyball');

app.use(volleyball);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.get('/tweets/:long/:lat', async (req, res) => {
  let { long, lat } = req.params;
  let { results } = await geoCode(long, lat);
  let location = results[0].formatted_address.split(', ')[1];

  try {
    let tweets = await getTweets(long, lat);
    res.send({ tweets, location });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post('/tweet', async (req, res) => {
  console.log('this is what being posted', req.body);
  try {
    const response = await postTweet(req.body);
    res.send(response);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`app is running on localhost:${PORT}`);
});
