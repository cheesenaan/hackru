const express = require('express')
var app = module.exports = express();
const port = 3000

app.use(express.json())

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
  res.status(200).send("okay");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
