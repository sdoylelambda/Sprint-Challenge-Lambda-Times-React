import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log("tabs props", props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => {
          console.log("this one here", tab)
          return (
            <Tab 
            selectTabHandler={tab.selectTabHandler} 
            selectedTab={tab.selectedTab} 
            tab={tab} 
            key={i}
            />
          )})}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tab: PropTypes.arrayOf(
      PropTypes.shape({
          headLine: PropTypes.string,
          tab: PropTypes.string,
          img: PropTypes.string,
          author: PropTypes.string
           })
      )
  }
export default Tabs;
