import React, { Component } from 'react'
import { Header } from './components/Header'
import { Hand } from './components/Hand'
const generateDeck = require('./helpers/deck')
const calculateScore = require('./helpers/scoring')

class App extends Component {
  state = {
    hasDealt: false
  }

  render() {
    return (
      <div>
        <Header />
        <h3>{this.state.score}</h3>
        <button onClick={this.startGame}>Deal</button>
        {this.state.hasDealt ? (
          <React.Fragment>
            <button onClick={this.endGame}>Go</button>
            <Hand cards={this.state.cards} onDiscard={this.selectCard} />
          </React.Fragment>
        ) : (
          <p>Click deal to play!</p>
        )}
      </div>
    )
  }

  startGame = () => {
    const deck = generateDeck()
    const cards = deck.splice(0, 5)

    this.setState({
      hasDealt: true,
      deck,
      cards,
      score: 0
    })
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

  endGame = () => {
    const cards = this.state.cards
    const score = calculateScore(cards)

    this.setState(state => {
      return {
        hasDealt: state.hasDealt,
        cards: state.cards,
        deck: state.deck,
        score
      }
    })
  }
}

export default App
