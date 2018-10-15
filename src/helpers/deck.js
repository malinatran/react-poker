const generateDeck = () => {
  const suits = ['♠️', '♥️', '♦️', '♣️']
  const deck = []

  suits.forEach(suit => {
    for (let i = 1; i < 14; i++) {
      deck.push({
        id: deck.length,
        suit,
        rank: i
      })
    }
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
