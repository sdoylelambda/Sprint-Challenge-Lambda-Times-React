import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.post.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.post.img} alt='image' />
        </div>
        <span>By {props.post.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Post.propTypes = {
  post: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
