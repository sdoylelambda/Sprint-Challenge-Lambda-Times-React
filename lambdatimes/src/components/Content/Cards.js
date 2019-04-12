import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(post => (
            <Card post={this.post} headline={this.headline} />
          ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.prototype = {
  post: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;