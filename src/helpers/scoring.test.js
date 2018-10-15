const calculateScore = require('./scoring')

const handWithPair = [
  {
    rank: '2'
  },
  {
    rank: '2'
  },
  {
    rank: '4'
  },
  {
    rank: '5'
  },
  {
    rank: '6'
  }
]

const handWithStraight = [
  {
    rank: '9'
  },
  {
    rank: '10'
  },
  {
    rank: 'J'
  },
  {
    rank: 'Q'
  },
  {
    rank: 'K'
  }
]

const handWithoutPairAndStraight = [
  {
    rank: 'A'
  },
  {
    rank: '3'
  },
  {
    rank: 'J'
  },
  {
    rank: '5'
  },
  {
    rank: '6'
  }
]

test('returns true for matching rank', () => {
  expect(calculateScore(handWithPair)).toEqual(100)
})

test('returns false for hand without matching rank', () => {
  expect(calculateScore(handWithoutPairAndStraight)).toEqual(0)
})

test('returns true for straight', () => {
  expect(calculateScore(handWithStraight)).toEqual(500)
})

test('returns false for hand without pair', () => {
  expect(calculateScore(handWithoutPairAndStraight)).toEqual(0)
})
