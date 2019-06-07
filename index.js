const express = require('express');
const keys = require("./config/keys");
const connectToDb = require("./config/connectToDb");
const app = express();

connectToDb(keys.mongoURI)

app.get('/', (req, res) => {
  res.send('Hi there')
})

app.listen(5000, function () {
  console.log("shop-node is listening on port 5000")
})