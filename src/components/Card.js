import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  render() {
    return (
      <div className="card-detail">
        <p className="text-left rank-and-suit-text">
          {this.getRank()} {this.props.card.suit}
        </p>
        <h4
          className={
            this.props.isSelected
              ? 'card-button selected-button'
              : 'card-button'
          }
          onClick={() => this.props.onCardSelection(this.props.card.id)}
        >
          <i className="glyphicon glyphicon-ok" />
          <p>Keep</p>
        </h4>
        <h4
          className="card-button"
          onClick={() => this.props.onDiscard(this.props.card)}
        >
          <i className="glyphicon glyphicon-remove" />
          <p>Discard</p>
        </h4>
        <p className="text-left rank-and-suit-text upside-down">
          {this.getRank()} {this.props.card.suit}
        </p>
      </div>
    )
  }

  getRank = () => {
    switch (this.props.card.rank) {
      case 1:
        return 'A'
      case 11:
        return 'J'
      case 12:
        return 'Q'
      case 13:
        return 'K'
      default:
        return this.props.card.rank
    }
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onDiscard: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}
