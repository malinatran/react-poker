const { generateDeck, addToDeck, countBools, removeCard } = require('./deck')

test('returns a deck of 52 cards', () => {
  const deck = generateDeck()
  expect(deck.length).toEqual(52)
})

test('return a deck of cards with id, suit, and rank', () => {
  const deck = generateDeck()
  const firstCard = deck[0]
  expect(firstCard.id).toBeTruthy()
  expect(firstCard.suit).toBeTruthy()
  expect(firstCard.rank).toBeTruthy()
})

test('updates deck if already exists', () => {
  const array = [{ id: 10, isSelected: false }, { id: 38, isSelected: true }]
  const newArray = [{ id: 10, isSelected: true }, { id: 38, isSelected: true }]
  const object = { id: 10, isSelected: true }

  expect(addToDeck(array, object)).toEqual(newArray)
})

test('adds to deck if does not already exist', () => {
  const array = [{ id: 10, isSelected: false }, { id: 38, isSelected: true }]
  const newArray = [
    { id: 10, isSelected: false },
    { id: 38, isSelected: true },
    { id: 20, isSelected: true }
  ]
  const object = { id: 20, isSelected: true }

  expect(addToDeck(array, object)).toEqual(newArray)
})

test('returns false if some elements are false', () => {
  const newArray = [
    { id: 10, isSelected: false },
    { id: 38, isSelected: true },
    { id: 20, isSelected: true },
    { id: 2, isSelected: true },
    { id: 1, isSelected: true }
  ]

  expect(countBools(newArray)).toEqual(false)
})

test('returns true if all five elements are true', () => {
  const newArray = [
    { id: 10, isSelected: true },
    { id: 38, isSelected: true },
    { id: 20, isSelected: true },
    { id: 21, isSelected: true },
    { id: 2, isSelected: true }
  ]

  expect(countBools(newArray)).toEqual(true)
})

test('removes card from deck', () => {
  const newArray = [
    { id: 10, isSelected: true },
    { id: 38, isSelected: true },
    { id: 20, isSelected: true },
    { id: 21, isSelected: true },
    { id: 2, isSelected: true }
  ]
  const otherArray = [
    { id: 38, isSelected: true },
    { id: 20, isSelected: true },
    { id: 21, isSelected: true },
    { id: 2, isSelected: true }
  ]

  expect(removeCard(newArray, 10)).toEqual(otherArray)
})
