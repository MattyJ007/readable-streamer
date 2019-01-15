'use strict'

const { stat, createReadStream } = require('fs')
const { promisify } = require('util')

const fileInfo = promisify(stat)

// add your video name
const video = './videos/{yourVideo}.mp4'

exports.respondWithVideo = async (req, res) => {
  const { size } = await fileInfo(video)
  const range = req.headers.range
  if (range) {
    let [start, end] = range.replace(/bytes=/, '').split('-')
    start = parseInt(start, 10)
    end = end ? parseInt(end, 10) : size - 1
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': (end - start) + 1,
      'Content-Type': 'video/mp4'
    })
    createReadStream(video, { start, end }).pipe(res)
  } else {
    res.writeHead(200, {
      'Content-Length': size,
      'Content-Type': 'video/mp4'
    })
    createReadStream(video).pipe(res)
  }
}
