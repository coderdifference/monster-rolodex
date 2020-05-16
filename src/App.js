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
  componentDidMount() {
    fetch("./data/cats.json")
      .then((response) => response.json())
      .then((cards) => this.setState({ cards: cards }));
  }
  render() {
    const { cards, filterString } = this.state;
    const matched = filterString ? cards.filter(card => card.title.toLowerCase().includes(filterString.toLowerCase())) : cards;
    return (
      <div className="App">
      <h1>Catadex!</h1>
      <p>Filter the card list by typing a fragment into the filter box</p>
      <FilterBox placeholder='Filter catadex...' onChange={e => this.setState({ filterString: e.target.value })}/>
        <CardList cards={matched}/>
      </div>
    );
  }
}

export default App;
