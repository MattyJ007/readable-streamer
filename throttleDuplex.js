'use strict'

const { Duplex } = require('stream')

module.exports = class Throttle extends Duplex {
  constructor (ms) {
    super()
    this.delay = ms
  }

  _write (chunk, encoding, callback) {
    this.push(chunk)
    setTimeout(callback, this.delay)
  }

  _read () {}

  _final () {
    this.push(null)
  }
}
