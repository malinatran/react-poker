const generateDeck = require('./deck')

test('returns a deck of 52 cards', () => {
  const deck = generateDeck()
  expect(deck.length).toBe(52)
})

test('return a deck of cards with id, suit, and rank', () => {
  const deck = generateDeck()
  const firstCard = deck[0]
  expect(firstCard.id).toBeTruthy()
  expect(firstCard.suit).toBeTruthy()
  expect(firstCard.rank).toBeTruthy()
})
