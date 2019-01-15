const uuid = require('uuid/v4')

function randomDOB (low = new Date('1903-01-02').getTime(), high = new Date().getTime()) {
  return new Date(Math.random() * (high - low) + low).toISOString().split('T')[0]
}

function randomName () {
  const names = ['Brad',
    'Brent',
    'Brett',
    'Martin',
    'Matt',
    'Thabo'
  ]
  return names[Math.floor(Math.random() * names.length)]
}

function randomSurname () {
  const surnames = [
    'the Weak',
    'the Foolish',
    'the Magnificent',
    'the Kind',
    'the Great',
    'the Scholar',
    'the boring',
    'the Clueless',
    'the Omnipotent'
  ]
  return surnames[Math.floor(Math.random() * surnames.length)]
}

exports.newPatient = (name, surname, dob) => {
  name = randomName()
  surname = randomSurname()
  dob = randomDOB()

  return JSON.stringify({
    name,
    surname,
    dob,
    id: uuid()
  })
}
