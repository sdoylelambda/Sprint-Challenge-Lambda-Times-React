import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">this is the headline{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.image} alt='image here' />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  post: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
