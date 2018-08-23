const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3033;
const getTweets = require('./utils/getTweets');
const postTweet = require('./utils/postTweet');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.get('/tweets/:long/:lat', async (req, res) => {
  let { long, lat } = req.params;
  try {
    let tweets = await getTweets(long, lat);
    res.send(tweets);
  } catch (error) {
    res.status(400).send('Something went wrong.');
  }
});

app.post('/tweet', async (req, res) => {
  try {
    const response = postTweet(req.body)
    console.log('REsponse on the route', response)
    res.send(response);
  } catch (error) {
    res.status(400).send('Something went wrong!')
  }
})

app.listen(PORT, () => {
  console.log(`app is running on localhost:${PORT}`);
});
