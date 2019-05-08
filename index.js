const express = require('express');
const mongoose = require('mongoose')
const keys = require("./config/keys");

const app = express();

mongoose.connect(keys.mongoURI)

const Message = require('./models/Message')

const message = new Message({title: "testTitle", text: "testText"})

message.save(function (err, message) {
  if (err) return console.error(err);
  console.log("saved message to mongo :"+ message)
})

require("./routes/messageRoutes")(app);

app.get('/', (req, res) => {
  res.send('Hi there')

})

app.listen(5000, function () {
  console.log("shop-node is listening on port 5000")
})