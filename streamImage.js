const request = require('request')

const imageUrl = 'yourImage.jpg'

exports.respondWithAnImage = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'image/jpeg'
  })
  request(imageUrl)
    .pipe(res)
}
