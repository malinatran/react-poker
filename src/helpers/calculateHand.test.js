const calculateHand = require('./calculateHand')

const SUIT_TYPES = {
  CLUBS: 'clubs',
  DIAMONDS: 'diamonds',
  HEARTS: 'hearts',
  SPADES: 'spades',
}

const handWithFlush = [
  { rank: 5, suit: SUIT_TYPES.DIAMONDS },
  { rank: 5, suit: SUIT_TYPES.DIAMONDS },
  { rank: 3, suit: SUIT_TYPES.DIAMONDS },
  { rank: 2, suit: SUIT_TYPES.DIAMONDS },
  { rank: 6, suit: SUIT_TYPES.DIAMONDS },
]

const handWithTwoPairs = [
  { rank: 5, suit: SUIT_TYPES.CLUBS },
  { rank: 2, suit: SUIT_TYPES.DIAMONDS },
  { rank: 5, suit: SUIT_TYPES.SPADES },
  { rank: 2, suit: SUIT_TYPES.HEARTS },
  { rank: 6, suit: SUIT_TYPES.CLUBS },
]

const handWithPair = [
  { rank: 9, suit: SUIT_TYPES.HEARTS },
  { rank: 2, suit: SUIT_TYPES.DIAMONDS },
  { rank: 5, suit: SUIT_TYPES.SPADES },
  { rank: 2, suit: SUIT_TYPES.HEARTS },
  { rank: 6, suit: SUIT_TYPES.CLUBS },
]

const handWithStraight = [
  { rank: 12, suit: SUIT_TYPES.DIAMONDS },
  { rank: 9, suit: SUIT_TYPES.DIAMONDS },
  { rank: 11, suit: SUIT_TYPES.SPADES },
  { rank: 10, suit: SUIT_TYPES.HEARTS },
  { rank: 13, suit: SUIT_TYPES.CLUBS },
]

const handWithoutPairOrStraight = [
  { rank: 1, suit: SUIT_TYPES.SPADES },
  { rank: 3, suit: SUIT_TYPES.DIAMONDS },
  { rank: 11, suit: SUIT_TYPES.SPADES },
  { rank: 5, suit: SUIT_TYPES.HEARTS },
  { rank: 6, suit: SUIT_TYPES.CLUBS },
]

test("returns 'flush' for hand with same suit", () => {
  expect(calculateHand(handWithFlush)).toEqual('flush')
})

test("returns 'straight' for hand with consecutive rank", () => {
  expect(calculateHand(handWithStraight)).toEqual('straight')
})

test("returns 'twoPair' for hand with double pairs of matching rank", () => {
  expect(calculateHand(handWithTwoPairs)).toEqual('twoPair')
})

test("returns 'pair' for hand with single pair of matching rank", () => {
  expect(calculateHand(handWithPair)).toEqual('pair')
})

test("returns 'none' for hand without flush, straight, or pairs", () => {
  expect(calculateHand(handWithoutPairOrStraight)).toEqual('none')
})
