import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}







          {props.cards.map(post => {
            console.log(post)
            return (
            <Card post={post} headline={post.headline} image={post.img} author={post.author} />
          )})}
    </div>
  )
}


// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  post: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;