import React from 'react';
import PropTypes from 'prop-types';
import { tabData } from '../../data';

const Tab = props => {
      
      if(props.tab === props.selectedTab){
        this.setState({ tab: tabData})
      } else {
        this.setState({ tab: tabData })
      }

  return (
    <div
      className={`tab${props.tab.tab ? "tab active-tab" : "tab"}`}
      onClick={() => {
         props.toggleItem(props.tab.id)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.arrayOf(
      PropTypes.shape({
          selectedTabHandler: PropTypes.string,
          selectedTab: PropTypes.string,
          tab: PropTypes.string
           })
      )
  }

export default Tab;
