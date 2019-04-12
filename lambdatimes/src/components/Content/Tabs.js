import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log("tabs props", props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => {
          console.log("this one here", tab)
          return (
            <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab} />
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
