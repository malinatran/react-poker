import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  // state = {
  //   isSelected: true
  // }

  render() {
    return (
      <div className="col-sm-1 col-sm-offset-1 CardDetail">
        <p className="text-left RankAndSuitText">
          {this.props.card.rank} {this.props.card.suit}
        </p>
        <h4 className="isSelected">Keep</h4>
        <h4 onClick={() => this.props.onDiscard(this.props.card)}>Discard</h4>
        <p className="text-left RankAndSuitText UpsideDown">
          {this.props.card.rank} {this.props.card.suit}
        </p>
      </div>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onDiscard: PropTypes.func.isRequired
}
