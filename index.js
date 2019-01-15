'use strict'

const { createServer } = require('http')

const { respondWithAnImage } = require('./streamImage')
const { respondWithVideo } = require('./streamVideo')
const { respondWithAPatient } = require('./streamPatient')

createServer((req, res) => {
  if (req.url === '/video') {
    respondWithVideo(req, res)
  } else if (req.url === '/image') {
    respondWithAnImage(req, res)
  } else if (req.url === '/patient') {
    respondWithAPatient(req, res)
  }
}).listen(3000, () => console.log('Listening on Port 3000'))
