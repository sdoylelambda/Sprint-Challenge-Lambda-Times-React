import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.post.img} alt='image thumbnail' /* image source goes here */} />
        </div>
        <span>By {props.post.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.prototype = {
  post: PropType.shape({
    headline: PropType.string.isRequired,
    tab: PropType.string.isRequired,
    img: PropType.string.isRequired,
    author: PropType.string.isRequired
  })
}

export default Card;
