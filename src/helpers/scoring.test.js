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
    rank: 'jack'
  },
  {
    rank: 'queen'
  },
  {
    rank: 'king'
  }
]

const handWithoutPairAndStraight = [
  {
    rank: 'ace'
  },
  {
    rank: '3'
  },
  {
    rank: 'jack'
  },
  {
    rank: '5'
  },
  {
    rank: '6'
  }
]

test('returns true for matching rank', () => {
  expect(calculateScore(handWithPair)).toBe(100)
})

test('returns false for hand without matching rank', () => {
  expect(calculateScore(handWithoutPairAndStraight)).toBe(0)
})

test('returns true for straight', () => {
  expect(calculateScore(handWithStraight)).toBe(500)
})

test('returns false for hand without pair', () => {
  expect(calculateScore(handWithoutPairAndStraight)).toBe(0)
})
