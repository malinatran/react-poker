import React, { Component } from 'react'
import { Header } from './components/Header'
import { Hand } from './components/Hand'
import { Scoreboard } from './components/Scoreboard'
import { Buttons } from './components/Buttons'
import './App.css'
const calculateScore = require('./helpers/scoring')
const generateDeck = require('./helpers/deck')

const NUM_CARDS_IN_HAND = 5
const UNSCORED = -1

class App extends Component {
  state = {
    hasDealt: false,
    isGameOver: false,
    selectedCards: []
  }

  render() {
    const { cards, hasDealt, isGameOver, selectedCards, score } = this.state

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <Header />
          <Buttons
            hasDealt={hasDealt}
            startGame={this.startGame}
            endGame={this.endGame}
            isGameOver={isGameOver}
            isReadyToScore={selectedCards.length === NUM_CARDS_IN_HAND}
          />
          {hasDealt ? (
            <>
              <p className="text-uppercase">
                Select 'keep' for each card to click 'go' and score
              </p>
              <Hand
                cards={cards}
                onDiscard={this.getNewCard}
                selectedCards={selectedCards}
                onCardSelection={this.toggleCardSelection}
              />
              {score === UNSCORED ? '' : <Scoreboard score={score} />}
            </>
          ) : (
            <p className="text-uppercase">Click 'deal' to play!</p>
          )}
        </div>
      </div>
    )
  }

  toggleCardSelection = id => {
    if (this.state.isGameOver) return

    this.setState(state => {
      return {
        selectedCards: !state.selectedCards.includes(id)
          ? [...state.selectedCards, id]
          : state.selectedCards.filter(cardId => cardId !== id),
        score: UNSCORED
      }
    })
  }

  startGame = () => {
    const deck = generateDeck()
    const cards = deck.splice(0, NUM_CARDS_IN_HAND)

    this.setState({
      cards,
      deck,
      isGameOver: false,
      hasDealt: true,
      score: UNSCORED,
      selectedCards: []
    })
  }

  getNewCard = card => {
    if (this.state.isGameOver) return
    if (this.state.deck.length === 0) return

    this.setState(state => {
      const [newCard, ...deck] = state.deck

      return {
        deck,
        cards: state.cards.map(c => (c === card ? newCard : c)),
        selectedCards: state.selectedCards.filter(cardId => cardId !== card.id)
      }
    })
  }

  endGame = () => {
    this.setState({
      score: calculateScore(this.state.cards),
      isGameOver: true
    })
  }
}

export default App
