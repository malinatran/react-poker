import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  state = {
    isSelected: false
  }

  render() {
    return (
      <div className="CardDetail">
        <p className="text-left RankAndSuitText">
          {this.props.card.rank} {this.props.card.suit}
        </p>
        <h4
          className={
            this.state.isSelected ? 'CardButton SelectedButton' : 'CardButton'
          }
          onClick={() => this.selectKeep(this.props.card.id)}
        >
          <i className="glyphicon glyphicon-ok" />
          <p>Keep</p>
        </h4>
        <h4
          className="CardButton"
          onClick={() => this.unselectKeep(this.props.card)}
        >
          <i className="glyphicon glyphicon-remove" />
          <p>Discard</p>
        </h4>
        <p className="text-left RankAndSuitText UpsideDown">
          {this.props.card.rank} {this.props.card.suit}
        </p>
      </div>
    )
  }

  selectKeep = cardId => {
    this.setState({
      isSelected: true
    })

    this.props.enableGoButton(cardId, true)
  }

  unselectKeep = card => {
    this.setState({
      isSelected: false
    })

    this.props.enableGoButton(card.id, false)
    this.props.onDiscard(card)
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onDiscard: PropTypes.func.isRequired
}
