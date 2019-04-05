import React from 'react';

const Tab = props => {
  if (this.props.tab === selectedTab) {
    return className='tab active-tab';
  } else {
    return className='tab';
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={'tab'}
      onClick={() => {
        /* Replace this dummy click handler function with your 
        selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument 
         to this handler. */

         this.props.selectedTabHandler(this.props.tab)

      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.arrayOf(
      PropTypes.shape({
          headLine: PropTypes.string,
          tab: PropTypes.string,
          img: PropTypes.string,
          author: PropTypes.string
           })
      )
  }

export default Tab;
