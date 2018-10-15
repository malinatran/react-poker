const calculateScore = cards => {
  let score = 0

  if (hasStraight(cards)) {
    score = 500
  } else if (hasPair(cards)) {
    score = 100
  }

  return score
}

const hasStraight = cards => {
  const actualHand = cards.map(card => card.rank).sort((a, b) => a - b)

  for (let i = 1; i < actualHand.length; i++) {
    if (actualHand[i] !== actualHand[i - 1] + 1) {
      return false
    }
  }

  return true
}

const hasPair = cards => {
  const values = cards.map(card => card.rank)
  return values.some((val, i) => values.indexOf(val) !== i)
}

module.exports = calculateScore
