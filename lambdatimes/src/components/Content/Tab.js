import React from 'react';
import PropTypes from 'prop-types';
import { tabData } from '../../data';

 const Tab = props => {
      
      // if(props.tab === props.selectedTab){
      //   this.setState({ tab: tabData})
      // } else {
      //   this.setState({ tab: tabData })
      // }

  return (
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : 'tab'}
      onClick={() => {
         props.changeSelected(props.tab)
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
