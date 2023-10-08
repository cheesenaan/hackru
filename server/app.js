const express = require('express')
var app = module.exports = express();
const port = 3000

const auth = require('./auth');
app.use('/auth', auth);

const redis = require('redis')
const client = redis.createClient()

client.connect()
client.set("hit_count", 1)

client.on('error', (err) => {
  console.log(`Error ${err}`)
})

app.get('/', async (req, res) => {
  console.log("GOOK")

  client.incr('hit_count')
  client.incr('hit_count', (err, count) => {
    if (err) {
      console.log("GOOK 1")
      console.error(err);
      res.status(500).send('Error incrementing hit count');
    } else {
      console.log("GOOK 2")
      next();
    }
  });

  res.status(200).send("okay");
});

app.get('/check', async (req, res) => {
  const count = await client.get('hit_count');

  res.status(200).json({ hitCount: count });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})