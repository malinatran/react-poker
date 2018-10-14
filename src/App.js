import React, { Component } from 'react'
import { Header } from './components/Header'
import { Hand } from './components/Hand'

class App extends Component {
  state = {
    hasDealt: false
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.startGame}>Deal</button>
        {this.state.hasDealt ? (
          <React.Fragment>
            <button>Go</button>
            <Hand cards={this.state.cards} onDiscard={this.selectCard} />
          </React.Fragment>
        ) : (
          <p>Click deal to play!</p>
        )}
      </div>
    )
  }

  startGame = () => {
    const deck = this.generateDeck()
    const cards = this.selectFiveCards(deck)

    this.setState({
      hasDealt: true,
      deck,
      cards
    })
  }

  selectFiveCards = deck => {
    return deck.splice(0, 5)
  }

  selectCard = card => {
    this.setState(state => {
      const [newCard, ...deck] = state.deck

      return {
        hasDealt: state.hasDealt,
        deck,
        cards: state.cards.map(c => {
          return c === card ? newCard : c
        })
      }
    })
  }

  generateDeck = () => {
    const suits = ['spades', 'hearts', 'diamonds', 'clubs']
    const values = [
      'ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'jack',
      'queen',
      'king'
    ]
    const deck = []

    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({
          id: deck.length,
          suit,
          value
        })
      })
    })

    return deck
  }
}

export default App
