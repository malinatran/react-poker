import React from 'react'
import { Card } from './Card'
import PropTypes from 'prop-types'

export const Hand = ({ cards, onDiscard, enableGoButton }) => {
  return (
    <div className="col-sm-10 col-sm-offset-1">
      <div className="row CardContainer">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onDiscard={onDiscard}
            enableGoButton={enableGoButton}
          />
        ))}
      </div>
    </div>
  )
}

Hand.propTypes = {
  card: PropTypes.object,
  onDiscard: PropTypes.func.isRequired,
  enableGoButton: PropTypes.func.isRequired
}
