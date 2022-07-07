const stringChallenge = require('./stringChallenge')
const assert = require('assert')

describe('Tests', function () {
  it('stringChallenge("abcabc") should return a number.', function () {
    assert(typeof stringChallenge("abcabc") === 'number')
  })
  it('stringChallenge("abcabc") should return 2.', function () {
    assert(stringChallenge("abcabc") === 2)
  })
  it('stringChallenge("cccc") should return 4.', function () {
    assert(stringChallenge("cccc") === 4)
  })
  it('stringChallenge("cccb") should return 1.', function () {
    assert(stringChallenge("cccb") === 1)
  })
  it('stringChallenge("ccbba") should return 1.', function () {
    assert(stringChallenge("ccbba") === 1)
  })
})
