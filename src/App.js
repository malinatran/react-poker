import React, { Component } from 'react'
import { Header } from './components/Header'
import { Hand } from './components/Hand'
import { Scoreboard } from './components/Scoreboard'
import './App.css'
const generateDeck = require('./helpers/deck')
const calculateScore = require('./helpers/scoring')

class App extends Component {
  state = {
    hasDealt: false
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <Header />
          <div className="col-sm-12 ButtonContainer">
            <button
              className="text-lowercase PrimaryButton"
              id="DealButton"
              onClick={this.startGame}
            >
              Deal
            </button>
            {this.state.hasDealt ? (
              <button
                className="text-lowercase PrimaryButton"
                id="GoButton"
                onClick={this.endGame}
              >
                Go
              </button>
            ) : (
              ''
            )}
          </div>
          {this.state.hasDealt ? (
            <React.Fragment>
              <Hand cards={this.state.cards} onDiscard={this.selectCard} />
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

  startGame = () => {
    const deck = generateDeck()
    const cards = deck.splice(0, 5)

    this.setState({
      hasDealt: true,
      deck,
      cards,
      score: -1
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
