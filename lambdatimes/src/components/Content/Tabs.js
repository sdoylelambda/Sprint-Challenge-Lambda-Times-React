import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, 
        create a new Tab component for each one.
            give the tab component a `selectTabHandler`,
             the `selectedTab`, and the `tab` itself as props*/}
          {this.state.Tabs.map(tab => (
            <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab} />
          ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  post: PropTypes.shape({
    selectTabHandler: PropTypes.string.isRequired,
    selectedTab: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  })
}

export default Tabs;
