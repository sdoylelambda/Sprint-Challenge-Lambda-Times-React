import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log(props)
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt='image here' />
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
    image: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
