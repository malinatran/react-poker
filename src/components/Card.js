import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.card.rank} {this.props.card.suit}
        </p>
        <button>Keep</button>
        <button onClick={() => this.props.onDiscard(this.props.card)}>
          Discard
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onDiscard: PropTypes.func.isRequired
}
