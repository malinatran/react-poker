import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ card, onDiscard }) => (
  <div className="col-sm-1 col-sm-offset-1 CardDetail">
    <p className="text-left RankAndSuitText">
      {card.rank} {card.suit}
    </p>
    <h4 className="isSelected">Keep</h4>
    <h4 onClick={() => onDiscard(card)}>Discard</h4>
    <p className="text-left RankAndSuitText UpsideDown">
      {card.rank} {card.suit}
    </p>
  </div>
)

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onDiscard: PropTypes.func.isRequired
}
