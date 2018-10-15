import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export const Buttons = ({ hasDealt, startGame, endGame, isDisabled }) => (
  <div className="col-sm-12 ButtonContainer">
    <button
      className="text-lowercase PrimaryButton"
      id="DealButton"
      onClick={startGame}
    >
      Deal
    </button>
    {hasDealt ? (
      <button
        className="text-lowercase PrimaryButton"
        id="GoButton"
        onClick={endGame}
        disabled={isDisabled}
      >
        Go
      </button>
    ) : (
      ''
    )}
  </div>
)

Buttons.propTypes = {
  hasDealt: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
