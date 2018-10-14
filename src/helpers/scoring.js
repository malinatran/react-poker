const calculateScore = cards => {
  let score = 0

  if (hasStraight(cards)) {
    score = 500
  } else if (hasPair(cards)) {
    score = 100
  }

  return score
}

const hasPair = cards => {
  const values = cards.map(card => card.rank)
  return values.some((val, i) => values.indexOf(val) !== i)
}

const hasStraight = cards => {
  const actualHand = cards
    .map(card => getNumericValue(card.rank))
    .sort((a, b) => a - b)

  const expectedHand = getExpectedHand(actualHand[0])
  return actualHand.toString() === expectedHand.toString()
}

const getNumericValue = rank => {
  if (rank === 'ace') {
    return 1
  } else if (rank === 'jack') {
    return 11
  } else if (rank === 'queen') {
    return 12
  } else if (rank === 'king') {
    return 13
  } else {
    return parseInt(rank)
  }
}

const getExpectedHand = lowestElement => {
  const hand = []

  for (let i = 0; i < 5; i++) {
    hand.push(lowestElement + i)
  }

  return hand
}

module.exports = calculateScore
