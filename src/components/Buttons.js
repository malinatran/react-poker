import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export const Buttons = ({
  endGame,
  hasDealt,
  isGameOver,
  isReadyToScore,
  startGame
}) => (
  <div className="col-sm-12 button-container">
    {!hasDealt || isGameOver ? (
      <button
        className="text-lowercase primary-button"
        id="deal-button"
        onClick={startGame}
      >
        Deal
      </button>
    ) : (
      <button
        className="text-lowercase primary-button"
        id="go-button"
        onClick={endGame}
        disabled={!isReadyToScore}
      >
        Go
      </button>
    )}
  </div>
)

Buttons.propTypes = {
  endGame: PropTypes.func.isRequired,
  hasDealt: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  isReadyToScore: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired
}
