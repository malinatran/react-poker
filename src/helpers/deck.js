const generateDeck = () => {
  const suits = ['♠️', '♥️', '♦️', '♣️']
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ]
  const deck = []

  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({
        id: deck.length,
        suit,
        rank
      })
    })
  })

  return shuffleDeck(deck)
}

const shuffleDeck = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

module.exports = generateDeck
