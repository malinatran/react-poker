const calculateHand = cards => {
  return hasFlush(cards) || hasStraight(cards) || hasPair(cards) || 'none'
}

const hasFlush = cards => {
  let hand = cards.map(card => card.suit)

  for (let i = 0; i < hand.length - 1; i++) {
    if (hand[i] !== hand[i + 1]) {
      return false
    }
  }

  return 'flush'
}

const hasStraight = cards => {
  const hand = cards.map(card => card.rank).sort((a, b) => a - b)

  for (let i = 1; i < hand.length; i++) {
    if (hand[i] !== hand[i - 1] + 1) {
      return false
    }
  }

  return 'straight'
}

const hasPair = cards => {
  const pairType = {
    1: 'pair',
    2: 'twoPair',
  }
  const numOfPairs = getNumOfPairs(cards)

  return pairType[numOfPairs]
}

const getNumOfPairs = cards => {
  let numOfPairs = 0
  const hand = cards.map(card => card.rank)
  hand.some((val, i) => {
    if (hand.indexOf(val) !== i) {
      numOfPairs++
    }
  })

  return numOfPairs
}

module.exports = calculateHand
