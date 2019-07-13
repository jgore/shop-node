const mongoose = require('mongoose')

const Message = mongoose.model('messages')

module.exports = (app) => {

  app.get('/api/message', (req, res) => {

    Message.find({}, function (err, messages) {
      res.send(messages);
    });
  })

}