var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')

app.use('/', express.static(path.join(__dirname, '/')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

const port = process.env.PORT || 3000

module.exports = function () {
  http.listen(port, function () {
    console.log('listening on 0.0.0.0:', port)
  })
}
