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

const addToDeck = (existingArr, newObject) => {
  const isFound = existingArr.some(element => {
    return element.id === newObject.id
  })

  if (isFound) {
    existingArr = existingArr.map(element => {
      if (element.id === newObject.id) {
        return { id: element.id, isSelected: newObject.isSelected }
      } else {
        return element
      }
    })
  }

  if (!isFound) {
    existingArr.push({ id: newObject.id, isSelected: newObject.isSelected })
  }

  return existingArr
}

const countBools = array => {
  let trueVals = 0
  let falseVals = 0

  array.forEach(element => {
    if (element.isSelected) {
      trueVals++
    } else {
      falseVals++
    }
  })

  return trueVals === 5 && falseVals === 0
}

const removeCard = (arr, cardId) => {
  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i]

    if (cardId === obj.id) {
      arr.splice(i, 1)
    }
  }

  return arr
}

module.exports = { generateDeck, addToDeck, countBools, removeCard }
