import React from 'react'
import { Card } from './Card'
import PropTypes from 'prop-types'

export const Hand = ({ cards, onDiscard }) => {
  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} card={card} onDiscard={onDiscard} />
      ))}
    </div>
  )
}

Hand.propTypes = {
  card: PropTypes.object,
  onDiscard: PropTypes.func.isRequired
}
