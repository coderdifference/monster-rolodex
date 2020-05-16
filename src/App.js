import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { FilterBox } from "./components/filter-box/filter-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      filterString: ''
    };
  }
  updateFilterTerm = filter => this.setState({filterString: filter});

  getFilteredCards = () => {
    const { cards, filterString } = this.state;
    return cards.filter(card => card.title.toLowerCase().includes(filterString.toLowerCase()));
  }

  loadCards = datasetName => new Promise(resolve => 
      fetch(`./data/${datasetName}.json`)
        .then(response => response.json())
        .then(cards => {
          this.setState({ cards: cards });
          resolve();
        }));
  
  componentDidMount() {
    this.loadCards('cats');
  }

  render() {
    return (
      <div className="App">
      <h1>Catadex!</h1>
      <p className="instructions">Filter the card list by typing a fragment into the filter box</p>
      <FilterBox placeholder='Filter catadex...' onChange={e => this.updateFilterTerm(e.target.value)}/>
        <CardList cards={this.getFilteredCards()}/>
      </div>
    );
  }
}

export default App;
