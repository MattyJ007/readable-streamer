'use strict'

const request = require('request')
const Throttle = require('./throttleDuplex')

const imageUrl = 'https://www.google.co.za/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

const throttle = new Throttle(100)

exports.respondWithAnImage = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'image/png'
  })
  request(imageUrl)
    .pipe(throttle)
    .pipe(res)
}
