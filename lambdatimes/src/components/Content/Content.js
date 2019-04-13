import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
  this.setState({tabs: tabData})
  this.setState({cards: cardData})
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
  this.setState({ selected: tab })
  };

  filterCards = () => {

if(this.state.selected === "all"|| this.state.selected === "All") {
  return this.state.cards;
} else {
  return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  }

  render() {
    return (
      <div className="content-container">
        <Tabs 
        changeSelected={this.changeSelected}
        tabs={this.state.tabs} 
        selectedTab={this.state.selectedTab} 
        selectedTabHandler={this.state.selectedTabHandler} 
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
