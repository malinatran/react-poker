import React from 'react'
import { Card } from './Card'
import PropTypes from 'prop-types'

export const Hand = ({ cards, onCardSelection, onDiscard, selectedCards }) => {
  return (
    <div className="col-sm-10 col-sm-offset-1">
      <div className="row card-container">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            isSelected={selectedCards.includes(card.id)}
            onCardSelection={onCardSelection}
            onDiscard={onDiscard}
          />
        ))}
      </div>
    </div>
  )
}

Hand.propTypes = {
  cards: PropTypes.array.isRequired,
  onCardSelection: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
}
