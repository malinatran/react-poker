const calculateScore = require('./scoring')

const handWithPair = [
  { rank: 2 },
  { rank: 2 },
  { rank: 4 },
  { rank: 5 },
  { rank: 6 }
]

const handWithStraight = [
  { rank: 12 },
  { rank: 9 },
  { rank: 11 },
  { rank: 10 },
  { rank: 13 }
]

const handWithoutPairOrStraight = [
  { rank: 1 },
  { rank: 3 },
  { rank: 11 },
  { rank: 5 },
  { rank: 6 }
]

test('returns 100 for hand with matching rank', () => {
  expect(calculateScore(handWithPair)).toEqual(100)
})

test('returns 0 for hand without matching rank or straight', () => {
  expect(calculateScore(handWithoutPairOrStraight)).toEqual(0)
})

test('returns 500 for hand with straight', () => {
  expect(calculateScore(handWithStraight)).toEqual(500)
})
