const through2 = require('through2')
const { Readable } = require('readable-stream')

const { newPatient } = require('./createPatient')

exports.respondWithAPatient = async (req, res) => {
  const stream = Readable({ objectMode: true })
  stream._read = () => {}

  setInterval(() => {
    stream.push({
      patient: newPatient()
    })
  }, 1000)

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  const getX = through2.obj((data, enc, cb) => {
    cb(null, `${data.patient.toString()}\n`)
  })
  stream.pipe(getX).pipe(res)
}
