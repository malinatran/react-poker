import React from 'react'
import { Card } from './Card'
import PropTypes from 'prop-types'

export const Hand = ({ cards, onDiscard }) => {
  return (
    <div className="col-sm-12">
      <div className="row">
        {cards.map(card => (
          <Card key={card.id} card={card} onDiscard={onDiscard} />
        ))}
      </div>
    </div>
  )
}

Hand.propTypes = {
  card: PropTypes.object,
  onDiscard: PropTypes.func.isRequired
}
