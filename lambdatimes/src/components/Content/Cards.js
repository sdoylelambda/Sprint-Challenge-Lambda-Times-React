import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
  
          {props.cards.map((post, i) => {
            return (
            <Card 
            key={i}
            post={post} 
            headline={post.headline} 
            image={post.img} 
            author={post.author} 
            />
          );
          })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  post: PropTypes.shape({
    key: PropTypes.string,
    post: PropTypes.string,
    headline: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;