import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    fetch("./data/cats.json")
      .then((response) => response.json())
      .then((cards) => this.setState({ cards: cards }));
  }
  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
