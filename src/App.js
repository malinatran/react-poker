import React, { Component } from 'react'
import { Header } from './components/Header'
import { Hand } from './components/Hand'
import { Scoreboard } from './components/Scoreboard'
import { Buttons } from './components/Buttons'
import './App.css'
const {
  generateDeck,
  addToDeck,
  countBools,
  removeCard
} = require('./helpers/deck')
const calculateScore = require('./helpers/scoring')

class App extends Component {
  state = {
    hasDealt: false,
    handValues: [],
    isDisabled: true
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <Header />
          <Buttons
            hasDealt={this.state.hasDealt}
            startGame={this.startGame}
            endGame={this.endGame}
            isDisabled={this.state.isDisabled}
          />
          {this.state.hasDealt ? (
            <React.Fragment>
              <p className="text-uppercase">
                Select 'keep' for each card to click 'go' and score
              </p>
              <Hand
                cards={this.state.cards}
                onDiscard={this.selectCard}
                enableGoButton={this.enableGoButton}
              />
              {this.state.score === -1 ? (
                ''
              ) : (
                <Scoreboard score={this.state.score} />
              )}
            </React.Fragment>
          ) : (
            <p className="text-uppercase">Click deal to play!</p>
          )}
        </div>
      </div>
    )
  }

  enableGoButton = (id, isSelected) => {
    this.setState(state => {
      return {
        handValues: addToDeck(state.handValues, { id, isSelected }),
        isDisabled: !countBools(state.handValues)
      }
    })
  }

  startGame = () => {
    const deck = generateDeck()
    const cards = deck.splice(0, 5)

    this.setState({
      hasDealt: true,
      deck,
      cards,
      score: -1,
      handValues: [],
      isDisabled: true
    })
  }

  selectCard = card => {
    this.setState(state => {
      const [newCard, ...deck] =
        state.deck.length > 1 ? state.deck : [card, state.deck]

      return {
        hasDealt: state.hasDealt,
        deck,
        cards: state.cards.map(c => {
          return c === card ? newCard : c
        }),
        handValues: removeCard(state.handValues, card.id),
        isDisabled: !countBools(state.handValues)
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
